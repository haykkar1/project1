Create a simple express app which will have
- mongo connection
- routes - /register, /login
- register(userName, password)
    > - password should be hashed
    > - userName should be unique
    > - create documnet for user(mongo)
- login
    > - chech if user exists in DB
    > - create jwt token
