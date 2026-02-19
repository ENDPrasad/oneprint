import Joi from "joi";

export const generatePrintLinkSchema = Joi.object({
  key: Joi.string().required(),
  expiresInSeconds: Joi.number().required(),
});
