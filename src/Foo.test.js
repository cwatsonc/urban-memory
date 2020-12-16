import { Client } from 'boardgame.io/client';
import { Local } from "boardgame.io/multiplayer";

describe('local master as done in bgio', () => {

    let client0;
    let client1;

    beforeAll(() => {
        let spec = {
            game: { moves: { A: (G, ctx) => ({ A: ctx.playerID }) } },
            multiplayer: Local(),
        };

        client0 = Client({ ...spec, playerID: '0' });
        client1 = Client({ ...spec, playerID: '1' });

        client0.start();
        client1.start();
    });

    afterAll(() => {
        client0.stop();
        client1.stop();
    });

    test('multiplayer interactions', () => {
        expect(client0.store.getState().ctx.currentPlayer).toBe('0');
        expect(client1.store.getState().ctx.currentPlayer).toBe('0');

        client0.moves.A();

        expect(client0.getState().G).toEqual({ A: '0' });
        expect(client1.getState().G).toEqual({ A: '0' });

        client0.events.endTurn();

        expect(client0.store.getState().ctx.currentPlayer).toBe('1');
        expect(client1.store.getState().ctx.currentPlayer).toBe('1');

        client1.moves.A();

        expect(client0.getState().G).toEqual({ A: '1' });
        expect(client1.getState().G).toEqual({ A: '1' });
    });
});