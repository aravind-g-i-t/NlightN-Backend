export interface ISMSService {
  send(to: string, message: string): Promise<void>;
}