import { Router } from "express";
import S3Service from "../../services/S3Service.js";
import { generatePrintLinkSchema } from "../../validations/printLinksValidation.js";
import multer from "multer";
import SchedulerService from "../../services/SchedulerService.js";

const router = Router();

const s3Service = new S3Service();

// To accept file upload
const upload = multer({
  storage: multer.memoryStorage(),
});

// @route  GET link
// @desc   Get a timebound link to access a file (cry.jpg will be there in the S3 bucket)
// @access Public
router.get("/", async (req, res) => {
  try {
    const validationResult = generatePrintLinkSchema.validate(req.body);

    if (validationResult.error) {
      res.status(400).json({ message: validationResult.error.message });
    }

    const { key, expiresInSeconds } = req.body;
    const url = await s3Service.getObjectURL(key, expiresInSeconds);
    res.status(200).json({ url });
  } catch (err) {
    console.error("Error at GET /printLinks: ", err.message);
    res.status(500).json({ message: err.message });
  }
});

// @route  POST upload
// @desc   Upload the user's file as temporary file and generate a link to access it
// @access Public
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "File required" });

    const expiryMinutes =
      parseInt(req.query.expiryMinutes) ||
      process.env.DEFAULT_EXPIRY_TIME_IN_MINUTES;

    const expiryDate = new Date(Date.now() + expiryMinutes * 60 * 1000);

    const expiresInSeconds = expiryMinutes * 60;

    // Upload file
    const key = await s3Service.uploadFile(req.file);

    // Schedule deletion
    await SchedulerService.scheduleDeletion(key, expiryDate);

    // Generate signed URL
    const url = await s3Service.getObjectURL(key, expiresInSeconds);

    return res.json({
      message: "File uploaded successfully",

      url: url,

      expiresAt: expiryDate,

      expiresInMinutes: expiryMinutes,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Upload failed",
    });
  }
});

export default router;
