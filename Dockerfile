# 1. Base image
FROM node:18-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# 4. Copy all source files
COPY . .

# 5. Build the Next.js app
RUN npm run build

# 6. Production image
FROM node:18-alpine AS runner

# 7. Set working directory
WORKDIR /app

# 8. Copy necessary files from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./

# 9. Expose port
EXPOSE 3000

# 10. Start the app
CMD ["npm", "start"]
