import { createClient, RedisClientType } from 'redis';
import { RedisCacheServiceImpl } from '@infrastructure/cache/RedisCacheServiceImpl';
import { ICacheService } from '@domain/interfaces/ICacheService';

let redisClient: RedisClientType;
// let cacheService: ICacheService;

export async function connectRedis() {
  redisClient = createClient({ url: process.env.REDIS_URL });

  redisClient.on('error', (err) => {
    console.error('Redis Error:', err);
  });

  await redisClient.connect();
  console.log('✅ Redis connected');

  // cacheService = new RedisCacheServiceImpl(redisClient);
}

export const cacheService: ICacheService = {
  async set(key: string, value: any, ttl: number): Promise<void> {
    await redisClient.set(key, JSON.stringify(value), {
      EX: ttl,
    });
  },

  async get<T>(key: string): Promise<T | null> {
    const data = await redisClient.get(key);
    return data ? JSON.parse(data) as T : null;
  },

  async delete(key: string): Promise<void> {
    await redisClient.del(key);
  }

}