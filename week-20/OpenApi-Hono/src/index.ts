// Very strong types required to auto-generate OpenAPI Spec

import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import { swaggerUI } from '@hono/swagger-ui'
import { ParamsSchema } from "./inputs";
import { UserSchema } from "./outputs";

const app = new OpenAPIHono

const getUserRoute = createRoute({
  method: 'get',
  path: '/user/{id}',
  request: {
    params:ParamsSchema
  },
  responses: {
    200: {
      content: {
        'application/json' : {
          schema: UserSchema
        }
      },
      description: "Get User Details."
    }
  }
})

const postUserRoute = createRoute({
  method: 'post',
  path: '/user/{id}',
  request: {
    params:ParamsSchema
  },
  responses: {
    200: {
      content: {
        'application/json' : {
          schema: UserSchema
        }
      },
      description: "Get User Details."
    }
  }
})

app.openapi(getUserRoute, (c) => {
  const {id} = c.req.valid("param");
  return c.json({
    name: 'Faizan',
    age: 23,
    id,

  })
})

app.openapi(postUserRoute, (c) => {
  const {id} = c.req.valid("param");
  return c.json({
    name: 'Faizan',
    age: 23,
    id,

  })
})

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'Test API',
  },
})

app.get('/ui', swaggerUI({ url: '/doc' }))

export default app;