# Sus stuff that shouldn't be happening but it isn't really exploding so ig it's fine

- Users can access pages they're not authorized for by typing their path in directly. 
  - Hence, page rerouting based on auth & banned state isn't completely working.
    - (It is rerouting when the user clicks buttons tho, so that's nice.)
  - Just looked at it a little deeper: The rerouting works when the user ISN'T logged in, but NOT if they are.
- Pressing login for an email that doesn't exist creates a new user...but let's just call this a feature.
  - OK SYKE I only got this once and have not been able to reproduce it...