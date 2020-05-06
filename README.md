# Cognito Authorisation SF
[Serverless Framework](https://www.serverless.com/) version of the [app-client-specific-lambda](https://bitbucket.org/uoa/app-cloudsso/src/master/app-client-specific-lambda/) function used to restrict Cognito login to a list of allowed groups.

## Installation
If you do not already have Serverless Framework installed globally, after cloning the repository run:

```
npm i
```

## Deployment option 1 (using `serverless.yml`)
1. Update the following section of the `serverless.yml` file:

```
custom:
  APP_ID:                                   # Example: 5ascspst9skjakf8d41pglpkis
  NEEDED_GROUP_MEMBERSHIP:                  # Example: test_group.ec|Employee.psrwi
```

2. Now simply run:
```
sls deploy
```

## Deployment option 2 (using the CLI)
Run the following command (replacing the values for `APP_ID` and `NEEDED_GROUP_MEMBERSHIP` as desired):
```
sls deploy --API_ID '5sp1337skpkis' --NEEDED_GROUP_MEMBERSHIP 'test_group.ec|Employee.psrwi'
```
