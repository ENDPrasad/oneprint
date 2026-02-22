import React from "react";

interface LinkCreatedCardProps {
  link: string;
  frequency: number;
  expiresIn: string;
}

const LinkCreatedCard: React.FC<LinkCreatedCardProps> = ({
  link,
  frequency,
  expiresIn,
}) => {
  return (
    <div className="flex flex-column gap-4 py-1">
      <div
        className="text-center py-2 border-round-top"
        style={{ background: "#cde8d2", color: "#1f5130" }}
      >
        Link created successfully
      </div>

      <div className="p-3 flex justify-content-between gap-2 shadow-1">
        {/* IMPORTANT: min-w-0 allows shrinking inside flex */}
        <div className="flex flex-column min-w-0 flex-1">
          <a
            href={link}
            className="text-blue-200 no-underline block overflow-hidden white-space-nowrap text-overflow-ellipsis w-full"
          >
            {link}
          </a>

          <div className="flex justify-content-between text-sm text-600">
            <span>
              Print Frequency: <strong>{frequency}</strong>
            </span>
          </div>

          <div className="text-sm">
            Expires In: <strong>{expiresIn}</strong>
          </div>
        </div>

        <div className="flex flex-column gap-2 flex-shrink-0">
          <div>Copyicon</div>
          <div>shareIcon</div>
        </div>
      </div>
    </div>
  );
};

export default LinkCreatedCard;
