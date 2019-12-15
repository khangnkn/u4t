# API Specification

## Auth

`host=<localhost:8080>`

|Status| Name | Method | Path | Type | Description
|---| -----| -----| ----| ----| -|
|Basic| Login | Post | /admin/login | body/json |
|Basic| Add admin | Post | /admin | body/json |
|Basic| User list| Get | /users/:role/:page/:limit||role: 0: leaner, 1: tutor, 2: admin, 3: root|
|Basic| User profile| Get| /users/:userName/detail|
|Basic| Lock user| Put| /users/lock/:userName|
|Basic| Unlock user| Put| /users/unlock/:userName|
|| SkillModel list| Get| /skills/:page/:skillsPerPage|
|| Delete skills| Delete| /skills/delelte|body/json
|| Update skills| Put| /skills|body/json
|| ContractModel list| Get| /contracts/:page/:contractsPerPage|
|| ComplainModel list| Get| /complains/:page/:complainsPerPage|
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
