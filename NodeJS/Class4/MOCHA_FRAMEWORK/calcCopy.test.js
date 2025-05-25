// const { expect } = require('chai');
// const { describe } = require('mocha');
import { describe } from 'mocha';
import { assert, expect } from 'chai';
// import { assert } from 'chai';

describe(
    "TestsCopy",
    () => {
        it(
            "Sum of two numbers copy",
            () => {
                const sum = 10 + 20;
                expect(sum).to.equal(30);
                // assert(sum == 30);
            }
        )

        it(
            "Text Maching copy",
            () => {
                const userName = "Sample User";
                assert(userName.includes("mple"));
            }
        )
    }
)