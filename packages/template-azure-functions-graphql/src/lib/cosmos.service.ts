import { Service } from 'typedi';
import { CosmosClient } from '@azure/cosmos';

/**
 * Initialises an instance of CosmosDB client to be injected across repositories
 *
 * You need to provide your own connection string
 */
@Service()
export class CosmosService {
  private cosmosClients: { [connecion: string]: CosmosClient } = {};

  /**
   * Conditionally create new instances of CosmosClient if there isn't one created inside this.cosmosClients
   *
   * Creating new CosmosClient each time we do DB operation occupies memory and slows down the app
   *
   * Therefore, we only create new CosmosClients if they are connected to different databases (different connectionString)
   */
  public createCosmosClient(connectionString: string): CosmosClient {
    if (!this.cosmosClients[connectionString]) {
      this.cosmosClients[connectionString] = new CosmosClient(connectionString);
    }
    return this.cosmosClients[connectionString];
  }

  public getCosmosClient(connectionString: string): CosmosClient | undefined {
    return this.cosmosClients[connectionString];
  }
}
