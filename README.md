To run the application you must run the following commands

1. start the database using `docker-compose up`
2. open another terminal
3. run `npm install` command
4. run `node ace migration:run`
5. run `node ace db:seed` -> this will insert 10 users with 30 invoices each
6. run `npm run dev` to start the application
7. Using Postman make a `POST` request to `localhost:3333/rpc` url using this raw body

```
{
    "module": "users",
    "getInvoices": {
        "userId":""
    }
}
```

# make sure you send a valid userId
