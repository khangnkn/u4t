# API Specification

## Auth

`host=<localhost:3000>`

| Name | Method | Path | Type |
| -----| -----| ----| ----|
| Login | Post | /auth/login | body/json |
| Register | Post | /auth/register | body/json |


### Samples:
1. Login

- Path: `<host>/auth/login`
- Method: `post`
- Body:
```json
{
    "username": "khang",
    "password": "123"
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
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImRhdGEiOnsic2tpbGxzIjpbXX0sImlzX2FjdGl2ZSI6dHJ1ZSwicm9sZSI6MCwiZGVsZXRlZF9hdCI6bnVsbCwiX2lkIjoiNWRlY2UwNjM2YzY2ZGIxYjUzMDQ2NDI0IiwidXNlcm5hbWUiOiJraGFuZyIsImNyZWF0ZWRfYXQiOiIyMDE5LTEyLTA4VDExOjM3OjA3LjcxNFoiLCJ1cGRhdGVkX2F0IjoiMjAxOS0xMi0wOFQxMTozNzowNy43MTRaIiwiX192IjowfSwiaWF0IjoxNTc1ODA1MDgxLCJleHAiOjE1NzU4OTE0ODF9.1xRUlLQvj1wJ84QdGg7SqzXTNkeJr--wEFKaDg67jWo"
    }
}
```