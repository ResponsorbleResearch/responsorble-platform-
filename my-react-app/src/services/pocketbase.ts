// src/services/pocketbase.ts
import PocketBase from 'pocketbase';

// Use your DigitalOcean IP or domain
export const pb = new PocketBase('http://your-droplet-ip:8090');