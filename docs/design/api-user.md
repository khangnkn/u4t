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
| Update | POST | /api/p/users/info | json |

### Profile

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
            "_id": "5df5cbf407d13b20338e3397",s
            "name": "Bình Dương"
        }
    ]
}
```

### Update Profile
- Path: `/api/p/users/info`
- Mehtod: `POST`
- Body:
```json

```

## Contract
### Create contract
- Method: `POST`
- API: `/api/p/contracts`
- Authentication: `true`
- Body:
```json
{
	"tutor": "5df5e3d1116830329cd03d6d",
	"learner": "5df5e3ca116830329cd03d6c",
	"title": "Create contract",
	"description": "create contract with love",
	"price": 6969000,
	"total": 30000,
	"start_date": 1578455264,
	"end_date": 1606780800
}
```
- Response:
```json
{
    "code": 1,
    "message": "success",
    "data": {
        "price": 6969000,
        "total": 30000,
        "issuing_time": 1578455571599,
        "rating": 0,
        "reviews": [],
        "_id": "5e1554187932ad2ac3e5072d",
        "tutor": "5df5e3d1116830329cd03d6d",
        "learner": "5df5e3ca116830329cd03d6c",
        "title": "Create contract",
        "description": "create contract with love",
        "start_date": 1578455264,
        "end_date": 1606780800,
        "__v": 0
    }
}
```

## Conversation
## Get all conversation by user id
- path: `/api/p/m/conversation`
- method: ` GET`
- authen: true
- response:
```json
{
    "code": 1,
    "message": "success",
    "data": [
        {
            "created_at": "2020-01-08T09:26:45.473Z",
            "messages": [],
            "_id": "5e15a31c73b4dd2b44456b57",
            "tutor": "5dfb406db41c611d1ecfb490",
            "learner": "5df5e3ca116830329cd03d6c",
            "__v": 0
        }
    ]
}
```

## get a conversation
- path: `/api/p/m/conversation/:id`
- method: `get`
- params: `id`
- response:
```json
{
    "code": 1,
    "message": "success",
    "data": {
        "created_at": "2020-01-08T09:26:45.473Z",
        "messages": [],
        "_id": "5e15a31c73b4dd2b44456b57",
        "tutor": "5dfb406db41c611d1ecfb490",
        "learner": "5df5e3ca116830329cd03d6c",
        "__v": 0
    }
}
```

## create conversation
- path: `/api/p/m/conversation`
- method: `POST`
- body:
```json
{
	"tutor": "5dfb406db41c611d1ecfb490",
	"learner": "5df5e3ca116830329cd03d6c"
}
```
- response:
```json
{
    "code": 1,
    "message": "success",
    "data": {
        "created_at": "2020-01-08T09:26:45.473Z",
        "messages": [],
        "_id": "5e15a31c73b4dd2b44456b57",
        "tutor": "5dfb406db41c611d1ecfb490",
        "learner": "5df5e3ca116830329cd03d6c",
        "__v": 0
    }
}
```

## get all contracts
- path: `/api/p/contracts `
- method: `get`
- response:
```json
{
    "code": 1,
    "message": "success",
    "data": [
        {
            "price": 250000,
            "hpw": 0,
            "total": 4500000,
            "issuing_time": 1578527800225,
            "rating": 0,
            "reviews": [],
            "_id": "5e166c6aa217740f5862fc4e",
            "tutor": {
                "data": {
                    "skills": [
                        "5e12177ecd9af428d8fa7472",
                        "5e14dedd564a6b4e50c86a30"
                    ],
                    "level": "5dfdaa512bc57e11b630c55e",
                    "intro": "XXXAAA",
                    "price": 4440,
                    "title": "SA"
                },
                "avatar": "http://res.cloudinary.com/ddll58gxr/image/upload/v1578473187/ukqlfgp2zavrbznqvbmy.png",
                "is_active": true,
                "role": 1,
                "deleted_at": null,
                "_id": "5e15941cb8817f20f2724d91",
                "username": "khangnkn",
                "created_at": "2020-01-08T08:34:36.911Z",
                "updated_at": "2020-01-08T08:34:36.911Z",
                "__v": 0,
                "address": "414 Duong Ba Trac",
                "city": "5df0e3394576d02450b15e9f",
                "email": "khangnkn@vng.com.vn",
                "fullname": "Nguyen Khac Nguyen Khang",
                "gender": false,
                "phone": "0907152450"
            },
            "learner": {
                "data": {
                    "skills": []
                },
                "avatar": "http://res.cloudinary.com/ddll58gxr/image/upload/v1578463062/wybbzpxwcjnriofnhe2k.png",
                "is_active": true,
                "role": 0,
                "deleted_at": null,
                "_id": "5dfb406db41c611d1ecfb490",
                "username": "khang",
                "city": "5df0e3394576d02450b15e9f",
                "created_at": "2019-12-19T09:18:37.116Z",
                "updated_at": "2020-01-08T16:17:00.691Z",
                "__v": 0,
                "address": "414 Duong Ba Trac",
                "email": "nguyenkhacnguyenkhang@gmail.com",
                "fullname": "Nguyen Khang",
                "gender": false,
                "phone": "0907152450"
            },
            "title": "Hop dong thu 2",
            "description": "Day JavaScript",
            "start_date": 1578527826,
            "end_date": 1580947027,
            "__v": 0
        },
        {
            "price": 250000,
            "hpw": 4,
            "total": 450000,
            "issuing_time": 1578528008568,
            "rating": 0,
            "reviews": [],
            "_id": "5e166d504316290ff1c49558",
            "tutor": {
                "data": {
                    "skills": [
                        "5e12177ecd9af428d8fa7472",
                        "5e14dedd564a6b4e50c86a30"
                    ],
                    "level": "5dfdaa512bc57e11b630c55e",
                    "intro": "XXXAAA",
                    "price": 4440,
                    "title": "SA"
                },
                "avatar": "http://res.cloudinary.com/ddll58gxr/image/upload/v1578473187/ukqlfgp2zavrbznqvbmy.png",
                "is_active": true,
                "role": 1,
                "deleted_at": null,
                "_id": "5e15941cb8817f20f2724d91",
                "username": "khangnkn",
                "created_at": "2020-01-08T08:34:36.911Z",
                "updated_at": "2020-01-08T08:34:36.911Z",
                "__v": 0,
                "address": "414 Duong Ba Trac",
                "city": "5df0e3394576d02450b15e9f",
                "email": "khangnkn@vng.com.vn",
                "fullname": "Nguyen Khac Nguyen Khang",
                "gender": false,
                "phone": "0907152450"
            },
            "learner": {
                "data": {
                    "skills": []
                },
                "avatar": "http://res.cloudinary.com/ddll58gxr/image/upload/v1578463062/wybbzpxwcjnriofnhe2k.png",
                "is_active": true,
                "role": 0,
                "deleted_at": null,
                "_id": "5dfb406db41c611d1ecfb490",
                "username": "khang",
                "city": "5df0e3394576d02450b15e9f",
                "created_at": "2019-12-19T09:18:37.116Z",
                "updated_at": "2020-01-08T16:17:00.691Z",
                "__v": 0,
                "address": "414 Duong Ba Trac",
                "email": "nguyenkhacnguyenkhang@gmail.com",
                "fullname": "Nguyen Khang",
                "gender": false,
                "phone": "0907152450"
            },
            "title": "Hop dong thu 3",
            "description": "Day nhieu thu",
            "start_date": 1578528061,
            "end_date": 1579737662,
            "__v": 0
        }
    ]
}
```

### change contract status
- path: `/api/p/contracts/status/:id`
- method: `post`
- params: id of contract
- body:
```json
{
    "status": 1,
}
```
- response:
```json
{
    "code": 1,
    "message": "success",
    "data": {
        "price": 120,
        "hpw": 0,
        "status": 1,
        "total": 12,
        "issuing_time": 1578508285641,
        "rating": 0,
        "reviews": [],
        "_id": "5e16271ec093294844baf2f5",
        "tutor": {
            "data": {
                "skills": [
                    "5e12177ecd9af428d8fa7472",
                    "5e14dedd564a6b4e50c86a30"
                ],
                "level": "5dfdaa512bc57e11b630c55e",
                "intro": "XXXAAA",
                "price": 4440,
                "title": "SA"
            },
            "avatar": "http://res.cloudinary.com/ddll58gxr/image/upload/v1578473187/ukqlfgp2zavrbznqvbmy.png",
            "is_active": true,
            "role": 1,
            "deleted_at": null,
            "_id": "5e15941cb8817f20f2724d91",
            "username": "khangnkn",
            "created_at": "2020-01-08T08:34:36.911Z",
            "updated_at": "2020-01-08T08:34:36.911Z",
            "__v": 0,
            "address": "414 Duong Ba Trac",
            "city": "5df0e3394576d02450b15e9f",
            "email": "khangnkn@vng.com.vn",
            "fullname": "Nguyen Khac Nguyen Khang",
            "gender": false,
            "phone": "0907152450"
        },
        "learner": {
            "data": {
                "skills": []
            },
            "avatar": "http://res.cloudinary.com/ddll58gxr/image/upload/v1578463062/wybbzpxwcjnriofnhe2k.png",
            "is_active": true,
            "role": 0,
            "deleted_at": null,
            "_id": "5dfb406db41c611d1ecfb490",
            "username": "khang",
            "city": "5df0e3394576d02450b15e9f",
            "created_at": "2019-12-19T09:18:37.116Z",
            "updated_at": "2020-01-08T16:17:00.691Z",
            "__v": 0,
            "address": "414 Duong Ba Trac",
            "email": "nguyenkhacnguyenkhang@gmail.com",
            "fullname": "Nguyen Khang",
            "gender": false,
            "phone": "0907152450"
        },
        "title": "12",
        "description": "",
        "start_date": 1578502800,
        "end_date": 1579712400,
        "__v": 0
    }
}
```
