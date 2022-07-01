# Part 1: Setting up the project

In this part you, will set up a NestJS project and ensure that it conforms to what you consider "best practices".

- Create a NestJS project and init a git repo.
- Add a simple "Hello World" test of your choice.
- Configure a pre-commit check with husky. Include what you consider a good safety check to ensure no "bad code" gets committed.
- Define a GitHub action which ensures that pull requests are not being submitted with any "bad code" (use your pre-commit script).
- Configure a Dockerfile and provide instructions in the README to build an image and run the container.
- Give an example curl that can be used to verify that this setup is working as intended after the container is running.
- Ensure that the README provides clear steps for a developer to run the app and tests.

# Part 2: Web3 Service

In this part, you will develop a Solana Web3 service and expose it over standard API protocols using the NestJS project from the previous part.

- Add @nfteyez/sol-rayz to your project
- Create a NestJS service that allows callers to fetch the NFTs held in a given wallet using the above library. Create a test to verify that it works.
- Use the "open random address" function on this page to get test addresses
- Expose this service over the following protocols using NestJS. How you do so is your decision, but the user story you want to enable is for someone that wants to create a gallery of the NFTs held by a particular wallet. Please make sure that you have tests for each protocol.
  - REST
  - GraphQL (does not need to be comprehensive of all properties, just a working example)

# Part 3: Productionizing

In this part, you will add some functionality which you would expect in a more production-ready system. What this entails is up to you, but please implement at least one such "feature". Some suggestions include:

- Caching to reduce response time from Solana network
- Rate limiting
- Authorizing requests via API keys on your endpoints
- Adding a database that tracks what requests were made as an audit trail.
- Deployment to the public internet (feel free to use any cloud service providers)
