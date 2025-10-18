#!/bin/bash

# Build React app
echo "Building React app..."
cd ..
npm run build

# Deploy to S3
echo "Deploying to S3..."
cd terraform
aws s3 sync ../build/ s3://$(terraform output -raw s3_bucket_name) --delete

# Invalidate CloudFront cache
echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id $(terraform output -raw cloudfront_distribution_id) --paths "/*"

echo "Deployment complete!"
echo "Website URL: $(terraform output -raw website_url)"