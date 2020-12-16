import { Client } from "boardgame.io/client";
import { game } from "./App";


describe('state transitions', () => {
    let p0, p1;

    beforeAll(() => {
        let spec = {
            game,
        };

        p0 = Client({ ...spec, playerID: '0' });
        p1 = Client({ ...spec, playerID: '1' });

        p0.start();
        p1.start();
    });

    afterAll(() => {
        p0.stop();
        p1.stop();
    });

    test("multiplayer test", () => {

        p0.moves.endStage();
        //p1.moves.endStage();

        //let G0: IGameState, G1: IGameState;
        //let c0: Ctx, c1: Ctx;

        const { G: G0, ctx: c0 } = p0.store.getState();
        const { ctx: c1 } = p1.store.getState();

        expect(c0.activePlayers).toEqual({ 1: "cutForDeal" });
        expect(c1.activePlayers).toEqual({ 1: "cutForDeal" });
        expect(c0.phase).toEqual("preGame");
        //expect(c1.phase).toEqual("preGame");
        expect(G0.dealerChoice).toEqual("northDealer");
        //expect(G1.dealerChoice).toBeFalsy();
    });

});


