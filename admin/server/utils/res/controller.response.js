import ResponseFormat from '../../shared/constant/response_code'

const postResponse = (result) => {
  if (result.err) {
    return await res
      .status(400)
      .json(
        ResponseFormat
          .error(result.err.code, result.err.message, result.data)
      )
  } else if (result.res) {
    return await res
      .status(201)
      .json(
        ResponseFormat
          .success(result.res.code, result.res.message, result.data)
      );
  }
}

const getResponse = (result) => {
  if (result.err) {
    return await res
      .status(400)
      .json(
        ResponseFormat
          .error(result.err.code, result.err.message, result.data)
      )
  } else if (result.res) {
    return await res
      .status(200)
      .json(
        ResponseFormat
          .success(result.res.code, result.res.message, result.data)
      );
  }
}

const updateResponse = (result) => {
  if (result.err) {
    return await res
      .status(400)
      .json(
        ResponseFormat
          .error(result.err.code, result.err.message, result.data)
      )
  } else if (result.res) {
    return await res
      .status(201)
      .json(
        ResponseFormat.success(result.res.code, result.res.message, result.data)

      );
  }
}

const deleteResponse = (result) => {
  if (result.err) {
    return await res
      .status(400)
      .json(
        ResponseFormat
          .error(result.err.code, result.err.message, result.data)
      )
  } else if (result.res) {
    return await res
      .status(200)
      .json(
        ResponseFormat
          .success(result.res.code, result.res.message, result.data)
      );
  }
}

const authenResponse = (result) => {

}

const internalServerError = (error) => {
  return res
    .status(500)
    .json()
}

export default {
  postResponse,
  getResponse,
  updateResponse,
  deleteResponse,
  authenResponse,
  internalServerError
}