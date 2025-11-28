import * as Joi from "joi";

export const validationSchema = Joi.object({
  PORT: Joi.number().default(4000),
  ALLOWED_ORIGINS: Joi.string().optional(),
  DATABASE_URL: Joi.string().uri().required(),
  JWT_SECRET: Joi.string().min(32).required(),
  JWT_EXPIRES_IN: Joi.string().default("15m"),
  ELASTIC_NODE: Joi.string().uri().optional(),
  ELASTIC_API_KEY: Joi.string().optional(),
  S3_BUCKET: Joi.string().optional(),
  AWS_REGION: Joi.string().optional()
});

