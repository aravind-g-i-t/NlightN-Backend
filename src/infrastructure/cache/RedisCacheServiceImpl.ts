import { ICacheService } from "@domain/interfaces/ICacheService";
import { RedisClientType } from 'redis';

export class RedisCacheServiceImpl implements ICacheService {
  private redis: RedisClientType;

  constructor(redisClient: RedisClientType) {
    this.redis = redisClient;
  }

  async set(key: string, value: any, ttl: number): Promise<void> {
    await this.redis.set(key, JSON.stringify(value), {
      EX: ttl,
    });
  }

  async get<T = any>(key: string): Promise<T | null> {
    const data = await this.redis.get(key);
    return data ? JSON.parse(data) as T : null;
  }

  async delete(key: string): Promise<void> {
    await this.redis.del(key);
  }
}
