# Terraform Infrastructure for Avatar App

This directory contains Terraform configuration to deploy the React Avatar App to AWS.

## Prerequisites

- AWS CLI configured with appropriate credentials
- Terraform installed
- Node.js and npm installed

## Setup

1. Copy `terraform.tfvars.example` to `terraform.tfvars`:
   ```
   cp terraform.tfvars.example terraform.tfvars
   ```

2. Edit `terraform.tfvars` with your values:
   ```
   bucket_name = "your-unique-bucket-name"
   aws_region  = "us-east-1"
   environment = "dev"
   ```

## Deploy

1. Initialize Terraform:
   ```
   terraform init
   ```

2. Plan the deployment:
   ```
   terraform plan
   ```

3. Apply the infrastructure:
   ```
   terraform apply
   ```

4. Deploy the React app:
   ```
   chmod +x deploy.sh
   ./deploy.sh
   ```

## Resources Created

- S3 bucket for static website hosting
- CloudFront distribution for global CDN
- S3 bucket policy for public read access

## Outputs

- `website_url`: The CloudFront URL to access your website
- `s3_bucket_name`: The S3 bucket name
- `cloudfront_distribution_id`: CloudFront distribution ID for cache invalidation