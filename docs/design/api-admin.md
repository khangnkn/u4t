# API Specification

## Auth

`host=<localhost:8080>`

|Status| Name | Method | Path | Type | Description
|---| -----| -----| ----| ----| -|
|| Login | Post | /admin/login | body/json |
|| Add admin | Post | /admin | body/json |
|| User list| Get | /users/:userType/:page/:usersPerPage|
|| User profile| Get| /users/:userName/detail|
|| Lock user| Put| /users/lock-account| body/json
|| Unlock user| Put| /users/unlock-account| body/json
|| Skill list| Get| /skills/:page/:skillsPerPage|
|| Delete skills| Delete| /skills/delelte|body/json
|| Update skills| Put| /skills|body/json
|| Contract list| Get| /contracts/:page/:contractsPerPage|
|| Complain list| Get| /complains/:page/:complainsPerPage|
|| Get revenu| Get| /revenues/:type|
|| Top sales | Get | /revenues/:orderBy/:scope|
||

### Samples:
1. Login

- Path: `<host>/auth/login`
- Method: `post`
- Body:
```json
{
    "username": "lynv",
    "password": "12345"
}
```
-- Response:
``` json
{
    "code": 1,
    "message": "success",
    "data": {
        "user": {
            "data": {
                "skills": []
            },
            "is_active": true,
            "role": 0,
            "deleted_at": null,
            "_id": "5dece0636c66db1b53046424",
            "username": "khang",
            "created_at": "2019-12-08T11:37:07.714Z",
            "updated_at": "2019-12-08T11:37:07.714Z",
            "__v": 0
        },
        "token": "eyJhbGciOiJIU..."
    }
}
```

2. Add new admin
- Role: 1 = root, 2 = admin


- Path: `<host>/admin`
- Method: `post`
- Body:
```json
{
    "username": "lynv",
    "password": "12345",
    "password_confirm": "12345",
    "email": "nguyenvietlyit@gmail.com",
    "fullname": "Nguyen Viet Ly",
    "avartar": null,
    "is_active": true,
    "role": 2,
    "timestamp": true
}
```
-- Response:
``` json
{
    "code": 1,
    "message": "success",
    "data": {
        "user": {
            "data": {
                "skills": []
            },
            "is_active": true,
            "role": 0,
            "deleted_at": null,
            "_id": "5dece0636c66db1b53046424",
            "username": "khang",
            "created_at": "2019-12-08T11:37:07.714Z",
            "updated_at": "2019-12-08T11:37:07.714Z",
            "__v": 0
        },
        "token": "eyJhbGciOiJIU..."
    }
}
```