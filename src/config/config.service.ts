import { Config, MongoConfig, KafkaConfig } from './config.interface';

export class ConfigService {
  private readonly config: Config;

  constructor() {
    // create mongo config
    const mongo: MongoConfig = {};
    const user = process.env.MONGO_USER || '';
    const password = process.env.MONGO_PASSWORD || '';
    const credentials = user && password ? `${user}:${password}@` : '';
    const mongoHost = process.env.MONGO_HOST || 'localhost';
    const mongoPort = process.env.MONGO_PORT || '27017';
    const database = process.env.MONGO_DATABASE || '';
    mongo.uri = process.env.MONGO_URI || `mongodb://${credentials}${mongoHost}:${mongoPort}/${database}`;

    // create kafka config
    const kafka: KafkaConfig = {};
    kafka.clientId = 'demo';
    const kafkaHost = process.env.KAFKA_HOST || 'localhost';
    const kafkaPort = process.env.KAFKA_PORT || '9092';
    kafka.brokerUris = [`${kafkaHost}:${kafkaPort}`];

    // create service config
    this.config = {
      port: +process.env.PORT || 3000,
      prefix: process.env.PREFIX || '/api',
      mongo,
      kafka,
    }
  }

  public getConfig(): Config {
    return this.config;
  }

}
