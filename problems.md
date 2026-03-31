# Sus stuff that shouldn't be happening but it isn't really exploding so ig it's fine

- Users can access pages they're not authorized for by typing their path in directly. 
  - Hence, page rerouting based on auth & banned state isn't completely working.
    - (It is rerouting when the user clicks buttons tho, so that's nice.)
- Logout endpoint is getting to Express's default error somehow (see stack trace below).

```
Trace
    at /users/animation/calebkh/cs260/cs260-project/service/index.js:178:11
    at Layer.handleError (/users/animation/calebkh/cs260/cs260-project/service/node_modules/router/lib/layer.js:116:17)
    at trimPrefix (/users/animation/calebkh/cs260/cs260-project/service/node_modules/router/index.js:340:13)
    at /users/animation/calebkh/cs260/cs260-project/service/node_modules/router/index.js:297:9
    at processParams (/users/animation/calebkh/cs260/cs260-project/service/node_modules/router/index.js:582:12)
    at next (/users/animation/calebkh/cs260/cs260-project/service/node_modules/router/index.js:291:5)
    at /users/animation/calebkh/cs260/cs260-project/service/node_modules/router/index.js:688:15
    at next (/users/animation/calebkh/cs260/cs260-project/service/node_modules/router/index.js:276:14)
    at next (/users/animation/calebkh/cs260/cs260-project/service/node_modules/router/lib/route.js:132:14)
    at /users/animation/calebkh/cs260/cs260-project/service/node_modules/router/lib/layer.js:161:9
```