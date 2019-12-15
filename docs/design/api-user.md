# API Specification

## Auth

`host=<localhost:8080>`

| Name | Method | Path | Type |
| -----| -----| ----| ----|
| Login | Post | /auth/login | body/json |
| Register | Post | /auth/register | body/json |


### Samples:
1. Login

- Path: `<host>/api/auth/login`
- Method: `post`
- Body:
```json
{
    "username": "khang",
    "password": "123"
}
```
- Response:
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
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImRhdGEiOnsic2tpbGxzIjpbXX0sImlzX2FjdGl2ZSI6dHJ1ZSwicm9sZSI6MCwiZGVsZXRlZF9hdCI6bnVsbCwiX2lkIjoiNWRlY2UwNjM2YzY2ZGIxYjUzMDQ2NDI0IiwidXNlcm5hbWUiOiJraGFuZyIsImNyZWF0ZWRfYXQiOiIyMDE5LTEyLTA4VDExOjM3OjA3LjcxNFoiLCJ1cGRhdGVkX2F0IjoiMjAxOS0xMi0wOFQxMTozNzowNy43MTRaIiwiX192IjowfSwiaWF0IjoxNTc1ODA1MDgxLCJleHAiOjE1NzU4OTE0ODF9.1xRUlLQvj1wJ84QdGg7SqzXTNkeJr--wEFKaDg67jWo"
    }
}
```

2. Register 

- Path: `<host>/api/auth/register`
- Method: `post`
- Body:
```json
{
	"username": "hung",
	"password": "123",
	"role": 1
}
```
- Response:
``` json
{
    "code": 1,
    "message": "user created"
}
```

## City
`host=<localhost:8080>`

| Name | Method | Path | Type |
| -----| -----| ----| ----|
| Login | Get | /api/cities | - |

1. Cities

- Path: `<host>/api/cities`
- Method: `get`
- Response:
``` json
{
    "code": 1,
    "message": "success",
    "data": [
        {
            "_id": "5df0e3394576d02450b15e9f",
            "name": "Hồ Chí Minh"
        },
        {
            "_id": "5df5cbf407d13b20338e3397",
            "name": "Bình Dương"
        }
    ]
}
```

## User
`host=<localhost:8080>`

| Name | Method | Path | Type |
| -----| -----| ----| ----|
| Profile | Get | /api/p/users/info | - |

1. Cities

- Path: `<host>/api/cities`
- Method: `get`
- Response:
``` json
{
    "code": 1,
    "message": "success",
    "data": [
        {
            "_id": "5df0e3394576d02450b15e9f",
            "name": "Hồ Chí Minh"
        },
        {
            "_id": "5df5cbf407d13b20338e3397",
            "name": "Bình Dương"
        }
    ]
}
```