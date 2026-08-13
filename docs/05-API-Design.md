1. Authentication APIs
   POST /api/v1/auth/register
   POST /api/v1/auth/login
   POST /api/v1/auth/logout
   POST /api/v1/auth/refresh-token
   POST /api/v1/auth/forgot-password
   POST /api/v1/auth/reset-password
   GET /api/v1/auth/verify-email
   GET /api/v1/auth/google
   GET /api/v1/auth/github

2. User APIs
   GET /api/v1/users/profile
   PUT /api/v1/users/profile
   GET /api/v1/users/{id}
   GET /api/v1/users/stats
   GET /api/v1/users/history

3. Problem APIs
   GET /api/v1/problems
   GET /api/v1/problems/{id}
   POST /api/v1/problems
   PUT /api/v1/problems/{id}
   DELETE /api/v1/problems/{id}

4. Contest APIs
   GET /api/v1/contests
   GET /api/v1/contests/{id}
   POST /api/v1/contests
   PUT /api/v1/contests/{id}
   DELETE /api/v1/contests/{id}
   POST /api/v1/contests/{id}/join
   POST /api/v1/contests/{id}/leave

5. Matchmaking APIs
   POST /api/v1/matchmaking/join
   POST /api/v1/matchmaking/leave
   GET /api/v1/matchmaking/status

6. Submission APIs
   POST /api/v1/submissions
   GET /api/v1/submissions/{id}
   GET /api/v1/submissions/history

7. Leaderboard APIs
   GET /api/v1/leaderboards/global
   GET /api/v1/leaderboards/contest/{id}
   GET /api/v1/leaderboards/college

8. AI APIs
   POST /api/v1/ai/hint
   POST /api/v1/ai/code-review
   GET /api/v1/ai/performance-report

9. Notification APIs
   GET /api/v1/notifications
   PUT /api/v1/notifications/read

10. Friend APIs
    POST /api/v1/friends/request
    PUT /api/v1/friends/accept
    DELETE /api/v1/friends/remove
    GET /api/v1/friends

11. Achievement APIs
    GET /api/v1/achievements
    GET /api/v1/users/achievements

12. Company APIs (Future)
    POST /api/v1/company/contests
    GET /api/v1/company/candidates

13. Admin APIs
    GET /api/v1/admin/users
    GET /api/v1/admin/analytics
    POST /api/v1/admin/problems
    POST /api/v1/admin/contests
    DELETE /api/v1/admin/users/{id}

14. Analytics APIs
    GET /api/v1/analytics/dashboard
    GET /api/v1/analytics/performance
    GET /api/v1/analytics/rating-history
