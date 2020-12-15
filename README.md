# burgundy-cherry
Created with CodeSandbox

cwatsonc/burgundy-cherry/inquire/bgio-state-question is an issue branch of cwatsonc/burgundy-cherry it is intended for illustrating the error failure states in App.test.tsx

Issue: When two clients are started and c0.move.endStage is performed expect to see identical ctx.activePlayers; for some reason the states are diverging.

Resolution:  The application was being constructed improperly and the clients were starting seperate states -- the problem was the client property ```multiplayer``` was being delivered in the application client, but not in the associated tests. Resolved in a coming pull. This branch will be merged to MASTER.




# urban-memory
