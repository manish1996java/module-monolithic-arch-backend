import { Express } from "express";

export function startServer(app: Express, port: number | string): void {
  app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
  });
}