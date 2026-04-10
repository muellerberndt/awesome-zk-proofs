# Awesome Zero-Knowledge Proofs

[![Website](https://img.shields.io/badge/View%20Interactive%20Version-floatingpragma.io-00ff41?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyek0xMSAxOS45M2MtMy45NS0uNDktNy0zLjg1LTctNy45MyAwLS42Mi4wOC0xLjIxLjIxLTEuNzlMOSAxNXYxYzAgMS4xLjkgMiAyIDJ2MS45M3ptNi45LTIuNTRjLS4yNi0uODEtMS0xLjM5LTEuOS0xLjM5aC0xdi0zYzAtLjU1LS40NS0xLTEtMUg4di0yaDJjLjU1IDAgMS0uNDUgMS0xVjdoMmMxLjEgMCAyLS45IDItMnYtLjQxYzIuOTMgMS4xOSA1IDQuMDYgNSA3LjQxIDAgMi4wOC0uOCAzLjk3LTIuMSA1LjM5eiIvPjwvc3ZnPg==)](https://floatingpragma.io/)
[![STARK Lab](https://img.shields.io/badge/Try%20STARK%20Lab-Interactive%20Tutorial-ff79c6?style=for-the-badge)](https://floatingpragma.io/starklab/)

> **[View the web version at floatingpragma.io](https://floatingpragma.io/)** - A visual learning path with curated resources organized by topic.
>
> **[Try STARK Lab](https://floatingpragma.io/starklab/)** - An interactive, step-by-step tutorial to understand STARK proofs intuitively.

---

A curated, annotated list of primers, papers, tools, and systems for zero-knowledge proofs. This README provides a traditional "awesome list" format, while the [web version](https://floatingpragma.io/) offers an interactive learning path with three parallel tracks: **SNARKs**, **STARKs**, and **Bulletproofs/IPA**.

### ZKP Intuition & Introductions
High-level intuition, core ideas, and why zero-knowledge matters.

- [10 Must-Read Papers That Shaped Modern Zero-Knowledge Proofs](https://blog.zksecurity.xyz/posts/ten-zk-papers/) - ZK/SEC quarterly overview of ten seminal ZKP papers and their impact.
- [Zero Knowledge Proofs: An Illustrated Primer](https://blog.cryptographyengineering.com/2014/11/27/zero-knowledge-proofs-illustrated-primer/) - Classic illustrated primer explaining ZK proofs with simple examples.
- [ZKP Overview: History, Proving Systems, Circuits, Compilers](https://zkp.science) - Curated overview of ZKP history with links to foundational primers and system guides.
- [History of Zero-Knowledge Proofs (LambdaClass)](https://blog.lambdaclass.com/our-highly-subjective-view-on-the-history-of-zero-knowledge-proofs/) - Narrative overview of ZKP evolution from interactive proofs to modern SNARK systems.
- [A Non-Mathematical Introduction to Zero Knowledge Proof](https://mirror.xyz/krinza.eth/5_Cr91cBK3XdkeHPQ9yjc7z_4NoTNxyqBiM4Jz4d5VE) - Narrative, example-driven introduction to ZK proofs without heavy math.
- [ZKPs for Engineers: Introduction](https://blog.zkga.me/intro-to-zksnarks) - Engineer-focused intro to zkSNARKs with prerequisites and a Circom example.
- [Prerequisite understanding questions](https://0xparc.notion.site/Prerequisite-understanding-questions-c5ebb77a5cc049f39577ec9a7fb7b22c) - Readiness problem set covering modular arithmetic and CRT skills for ZK circuits.
- [zk Battleship interactive course by sCrypt](https://academy.scrypt.io) - Interactive lessons and exercises, including the zk Battleship learning game.
- [Privacy in Cryptocurrencies: An Overview](https://medium.com/@yi.sun/privacy-in-cryptocurrencies-d4b268157f6c) - Explains privacy goals and tradeoffs in cryptocurrency systems.

### Math Fundamentals
Finite fields, polynomials, elliptic curves, and pairings - the math toolkit for ZK.

- [Computational Introduction to Number Theory and Algebra](https://shoup.net/ntb/ntb-v2.pdf) - Book-length reference on Computational Introduction to Number Theory and Algebra.
- [A Graduate Course in Applied Cryptography](http://toc.cryptobook.us/book.pdf) - Applied cryptography textbook by Boneh and Shoup; solid math and protocol prep.
- [Elliptic Curves & Cryptography (MoonMath Manual)](https://leastauthority.com/community-matters/moonmath-manual/) - Free textbook covering finite fields, elliptic curves, and pairing-based cryptography for SNARKs.
- [Modern Computer Algebra](https://maths-people.anu.edu.au/~brent/pd/mca-cup-0.5.9.pdf) - Book-length reference on Modern Computer Algebra.
- [Abstract Algebra](http://abstract.ups.edu/download/aata-20220728.pdf) - Book-length reference on Abstract Algebra.
- [Algebraic Number Theory](https://kashanu.ac.ir/Files/Content/ANT.pdf) - Book-length reference on Algebraic Number Theory.
- [Elliptic Curves Number Theory And Cryptography](https://people.cs.nctu.edu.tw/~rjchen/ECC2012S/Elliptic%20Curves%20Number%20Theory%20And%20Cryptography%202n.pdf) - Book-length reference on Elliptic Curves Number Theory And Cryptography.
- [SNARK Explained (series)](https://electriccoin.co/blog/snark-explain/) - Multi-part walkthrough of SNARK construction from commitments to pairings.
- [Pairings for Beginners](https://static1.squarespace.com/static/5fdbb09f31d71c1227082339/t/5ff394720493bd28278889c6/1609798774687/PairingsForBeginners.pdf) - Beginner-friendly notes on bilinear pairings and their role in pairing-based SNARKs.

### Proof System Mechanics
Interactive proofs, commitments, Fiat-Shamir, and sum-check.

- [On Interactive Proofs and Zero-Knowledge: A Primer](https://medium.com/magicofc/interactive-proofs-and-zero-knowledge-b32f6c8d66c3) - Article covering On Interactive Proofs and Zero-Knowledge: A Primer.
- [Proofs, Arguments, and Zero-Knowledge](https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf) - Lecture notes on ZKP definitions, soundness, and cryptographic assumptions.
- [The RareSkills Book of Zero Knowledge](https://www.rareskills.io/zk-book) - In-depth, practical book that spans ZK intuition through modern systems.
- [RareSkills ZK Bootcamp](https://www.rareskills.io/zk-bootcamp) - Structured course that walks through circuits, constraints, and proof systems.
- [ZkStudyClub: Polynomial Commitments (series)](https://www.youtube.com/watch?v=bz16BURH_u8) - Three-part session on polynomial commitments with Justin Drake.
- [Succinct Non-Interactive ZK](https://people.csail.mit.edu/silvio/Selected%20Scientific%20Papers/Proof%20Systems/Computationally_Sound_Proofs.pdf) - Foundational paper on succinct non-interactive zero-knowledge arguments.
- [Succinct NIZK without the PCP Theorem](http://www0.cs.ucl.ac.uk/staff/J.Groth/ShortNIZK.pdf) - Groth's construction of succinct NIZKs without relying on PCPs.
- [Succinct NIZK without PCP Theorem & Quasi-linear prover time](https://eprint.iacr.org/2012/215.pdf) - Quasi-linear prover-time NIZK construction building on succinct arguments.
- [Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge](https://eprint.iacr.org/2019/953.pdf) - Research paper on Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge.
- [On the Size of Pairing-based Non-interactive Arguments](https://eprint.iacr.org/2016/260.pdf) - Research paper on On the Size of Pairing-based Non-interactive Arguments.

### R1CS & Circuits (SNARK Track)
R1CS, QAPs, and circuit construction for SNARKs.

- [Quadratic Arithmetic Programs (QAPs) and R1CS](https://alinush.github.io/r1cs) - Deep dive on expressing NP relations as R1CS and QAPs with notation and history.
- [Quadratic Arithmetic Programs: from Zero to Hero](https://medium.com/@VitalikButerin/quadratic-arithmetic-programs-from-zero-to-hero-f6d558cea649) - Vitalik Buterin's comprehensive guide to QAPs, explaining the mathematics behind SNARKs.
- [Circuit Optimisation Handout](https://docs.google.com/document/d/1aZ1GUAJOBFuqD4GOo9HqAH8w4xJo7HM4Bjte5-wkdnU/edit) - Article covering Circuit Optimisation Handout.
- [Circom: zkSnark circuit compiler](https://github.com/iden3/circom) - Tooling and codebase for Circom: zkSnark circuit compiler.
- [Arithmetization schemes for ZK-SNARKs](https://blog.lambdaclass.com/arithmetization-schemes-for-zk-snarks/) - Compares R1CS, AIR, and PLONK-style arithmetization approaches.
- [Quadratic Arithmetic Programs (RareSkills)](https://rareskills.io/post/quadratic-arithmetic-program) - Step-by-step tutorial constructing QAPs from R1CS with worked examples.
- [RCC: Rust Circuit Compiler](https://github.com/delendum-xyz/rcc) - Tooling and codebase for RCC: Rust Circuit Compiler.
- [Chiquito: DSL for Halo2 circuits](https://github.com/privacy-scaling-explorations/chiquito) - Tooling and codebase for Chiquito: DSL for Halo2 circuits.
- [demo circuit](https://github.com/ebfull/bellman-demo) - Demo project illustrating R1CS circuits and workflows.
- [A circuit and zk-snark implement using Circom and SnarkJS by Luozhu](https://github.com/LuozhuZhang/zkps-circuit-snark) - Article covering A circuit and zk-snark implement using Circom and SnarkJS by Luozhu.
- [ZCash MPC Ceremony: Sapling Circuit](https://github.com/zcash-hackworks/sapling-mpc) - Implementation notes for the ZCash Sapling circuit MPC ceremony.

### Bulletproofs & IPA Systems
Short proofs without trusted setup using inner-product arguments.

- [Bulletproofs: Short Proofs for Confidential Transactions and More](https://eprint.iacr.org/2017/1066.pdf) - Original Bulletproofs paper introducing inner-product arguments for range proofs.
- [Bulletproofs Notes and Resources](https://github.com/sdiehl/bulletproofs) - Notes and references for understanding Bulletproofs and inner-product arguments.
- [Unfolding the Bulletproofs Magic: A SageMath Deep Dive](https://blog.zksecurity.xyz/posts/bulletproofs-sage/) - Hands-on walkthrough of Bulletproofs with SageMath code and folding steps.
- [Introduction to Bulletproofs](https://crypto.stanford.edu/bulletproofs/) - Overview and links for getting started with Bulletproofs.
- [From Zero (Knowledge) to Bulletproofs](https://github.com/AdamISZ/from0k2bp) - a long and very nice gradual explanation
- [Bulletproofs implementation in Haskell](https://github.com/adjoint-io/bulletproofs) - Haskell implementation for Bulletproofs.
- [Bulletproofs implementation in Rust](https://github.com/dalek-cryptography/bulletproofs) - Rust implementation for Bulletproofs.
- [Bulletproofs implementation in C](https://github.com/Tongsuo-Project/Tongsuo) - C implementation for Bulletproofs.
- [Programmable Constraint Systems for Bulletproofs](https://medium.com/interstellar/programmable-constraint-systems-for-bulletproofs-365b9feb92f7) - Article covering Programmable Constraint Systems for Bulletproofs.
- [Halo: Recursive bullet proof composition](https://www.coindesk.com/you-can-now-prove-a-whole-blockchain-with-one-math-problem-really) - Article covering Halo: Recursive bullet proof composition.

### Trace, AIR, and FRI (STARK Track)
Execution traces, AIR, and FRI for transparent proofs.

- [StarkLab](https://floatingpragma.io/starklab/) - An interactive, step-by-step tutorial to understand STARK proofs intuitively.
- [Anatomy of a STARK](https://aszepieniec.github.io/stark-anatomy/overview) - Multi-part guide to STARK design, AIR, and FRI mechanics.
- [Brainfuck STARK Tutorial](https://neptune.cash/learn/brainfuck-tutorial/) - Hands-on tutorial building a STARK for Brainfuck programs (uses simple esoteric language to focus on STARK mechanics).
- [Introduction to SNARKs/STARKs by Eli Ben-Sasson](https://www.youtube.com/watch?v=VUN35BC11Qw) - (YouTube)
- [Arithmetization II: We Need To Go Deeper](https://medium.com/starkware/arithmetization-ii-403c3b3f4355) - STARK-focused arithmetization walkthrough with AIR and trace details.
- [ZK Hack Whiteboard: SNARKs vs. STARKs](https://zkhack.dev/whiteboard/module-four/) - Whiteboard session comparing SNARK and STARK tradeoffs.
- [STARKs (series)](https://vitalik.eth.limo/general/2017/11/09/starks_part_1.html) - Vitalik Buterin's multi-part series introducing STARKs and FRI.

### SNARK Systems
Groth16, PLONK, Halo, and modern SNARK variants.

- [zkSNARKs in a nutshell](https://blog.ethereum.org/2016/12/05/zksnarks-in-a-nutshell/) - Article covering zkSNARKs in a nutshell.
- [An approximate introduction to how zk-SNARKs are possible](https://vitalik.eth.limo/general/2021/01/26/snarks.html) - Article covering An approximate introduction to how zk-SNARKs are possible.
- [Understanding PLONK](https://vitalik.eth.limo/general/2019/09/22/plonk.html) - Article covering Understanding PLONK.
- [What are zk-SNARKs?](https://z.cash/technology/zksnarks/) - Article covering What are zk-SNARKs?.
- [Comments on paper: zkSNARKs in a Nutshell by Aaron](https://github.com/ventali/awesome-zk/tree/main/zk-intro) - Article covering Comments on paper: zkSNARKs in a Nutshell by Aaron.
- [“SNARK” terminology and characterization of existence](https://eprint.iacr.org/2011/443.pdf) - BCCT11
- [SNARKs for C: Verifying Program Executions Succinctly and in Zero Knowledge](https://eprint.iacr.org/2013/507.pdf) - Research paper on SNARKs for C: Verifying Program Executions Succinctly and in Zero Knowledge.
- [zk-SNARKs on Bitcoin](https://xiaohuiliu.medium.com/zk-snarks-on-bitcoin-239d96d182bd) - Article covering zk-SNARKs on Bitcoin.
- [Comparison of the most popular zkp systems](https://github.com/matter-labs/awesome-zero-knowledge-proofs#comparison-of-the-most-popular-zkp-systems) - Article covering Comparison of the most popular zkp systems.
- [**Polylang**](https://polylang.dev) - | | | [**Miden**](https://docs.polygon.technology) | [**Risc Zero**](https://risczero.com/) | [**Noir (Barretenberg)**](https://noir-lang.org/) | [**Leo**](https://leo-lang.org/) |
- [Proving system comparison](https://youtu.be/LBTrX0Ukdvs?t=309) - ![compare snarks](./images/compare_snarks3.png)

### STARK Systems
STARK constructions, papers, and ecosystem overviews.

- [The STARK paper](https://eprint.iacr.org/2018/046.pdf) - Seminal STARK paper introducing AIR and FRI for transparent proofs.
- [STARK @ Home {video playlist}](https://www.youtube.com/playlist?list=PLcIyXLwiPilUFGw7r2uyWerOkbx4GFMXq) - Video session covering STARK @ Home {video playlist}.
- [Introduction to ZK-STARKs by remco@0x.org](https://hackmd.io/s/rJHYnQ3Z4) - Article covering Introduction to ZK-STARKs by remco@0x.org.
- [Transparent Succinct Arguments by Alessandro Chiesa (Oct 2018)](https://gist.github.com/Haseeb-Qureshi/f552fdbbb649ed4bbfeb681beb4091e1) - Article covering Transparent Succinct Arguments by Alessandro Chiesa.
- [State of the STARK by Eli Ben-Sasson (Devcon IV, Oct 2018)](https://drive.google.com/file/d/1Osa0MXu-04dfwn1YOSgN6CXOgWnsp-Tu/view) - ([video](https://www.youtube.com/watch?v=1KSwVIZ82hs))
- [libstark implementation](https://github.com/elibensasson/libSTARK) - Article covering STARK Systems (libstark implementation).
- [starkware.co](https://www.starkware.co) - More resources available at
- [Transparent SNARKs from DARK Compilers (Dec 2019)](https://eprint.iacr.org/2019/1229.pdf) - Research paper on Transparent SNARKs from DARK Compilers.

### Trusted Setup & KZG
Ceremonies, KZG commitments, and setup tradeoffs.

- [Trusted Setup Workshop by 0xparc](https://learn.0xparc.org/materials/learning-group-1/trusted-setup) - Article covering Trusted Setup Workshop by 0xparc.
- [How do trusted setups work?](https://vitalik.ca/general/2022/03/14/trustedsetup.html) - Article covering How do trusted setups work?.
- [Zero knowledge, subversion resistance, and concrete attacks | Steven Goldfeder | RWC 2018](https://youtu.be/DP8xSEM9bd8) - Video session covering Zero knowledge, subversion resistance, and concrete attacks | Steven Goldfeder | RWC 2018.
- [Implementing Trusted Setup Ceremony for Ethereum’s EIP-4844](https://reilabs.io/blog/implementing-trusted-setup-ceremony-for-ethereums-eip-4844/) - Technical post on the large-scale MPC ceremony for KZG in EIP-4844.
- [The Incredible Machine](https://medium.com/qed-it/the-incredible-machine-4d1270d7363a) - ZKP proving Sudoku and physical trusted setup
- [Diving into the zk-SNARKs Setup Phase](https://medium.com/qed-it/diving-into-the-snarks-setup-phase-b7660242a0d7) - Article covering Diving into the zk-SNARKs Setup Phase.
- [Setup Ceremonies](https://zkproof.org/2021/06/30/setup-ceremonies/) - Article covering Setup Ceremonies.
- [On-Chain Trusted Setup Ceremony](https://a16zcrypto.com/on-chain-trusted-setup-ceremony/) - Article covering On-Chain Trusted Setup Ceremony.
- [Announcing the Perpetual Powers of Tau Ceremony to benefit all zk-SNARK projects](https://medium.com/coinmonks/announcing-the-perpetual-powers-of-tau-ceremony-to-benefit-all-zk-snark-projects-c3da86af8377) - Article covering Announcing the Perpetual Powers of Tau Ceremony to benefit all zk-SNARK projects.
- [Trusted setup ceremonies explored](https://www.zeroknowledge.fm/133) - Article covering Trusted setup ceremonies explored.
- [A Subversion-Resistant SNARK](https://eprint.iacr.org/2017/599) - Article covering A Subversion-Resistant SNARK.

### STARK Tooling & Languages
Cairo, StarkNet tooling, and STARK-focused stacks.

- [StarkNet: permissionless decentralized ZK-Rollup](https://starkware.co/starknet/) - Article covering StarkNet: permissionless decentralized ZK-Rollup.
- [StarkLab by FloatingPragma](https://floatingpragma.io/starklab) - Interactive StarkNet/Cairo lab for hands-on exploration and experiments.
- [Miden: STARK-based zero-knowledge virtual machine](https://github.com/0xPolygonMiden/miden-vm) - Tooling and codebase for Miden: STARK-based zero-knowledge virtual machine.
- [quark: decentralized state machine with STARK proofs](https://github.com/liamzebedee/quark-blockchain/blob/master/whitepaper.md) - Article covering quark: decentralized state machine with STARK proofs.
- [Polygon Miden: a STARK-based zkRollup](https://polygon.technology/solutions/polygon-miden/) - Article covering Polygon Miden: a STARK-based zkRollup.
- [Warp: transpile Ethereum smart contracts to Cairo](https://github.com/NethermindEth/warp) - Article covering Warp: transpile Ethereum smart contracts to Cairo.
- [Isaac: a physics-powered onchain reality on Starknet](https://topology.gg/) - and their [blog](https://www.guiltygyoza.xyz/2022/05/topology-isaac-defcon)
- [Suez: move Eth to the Starknet ecosystem](https://suez.dev/) - Article covering Suez: move Eth to the Starknet ecosystem.
- [Papyrus: A Symbolic Execution Tool for Cairo](https://github.com/Veridise/Papyrus) - Tooling and codebase for Papyrus: A Symbolic Execution Tool for Cairo.
- [chess-cairo - A Cairo contract to play chess in Starknet](https://github.com/greenlucid/chess-cairo) - Article covering chess-cairo - A Cairo contract to play chess in Starknet.
- [Cairo goldmine](https://github.com/beautyisourbusiness/cairo-goldmine#gaming) - A comprehensive, annotated list repos in STARKNET

### SNARK Tooling & Languages
Circom, Halo2, Noir, and popular SNARK toolchains.

- [Snarkjs: zkSNARK implementation in JavaScript & WASM](https://github.com/iden3/snarkjs) - Tooling and codebase for Snarkjs: zkSNARK implementation in JavaScript & WASM.
- [Intro to Circom and Snarkjs by Iden3](https://iden3-docs.readthedocs.io/en/latest/iden3_repos/circom/TUTORIAL.html) - Official Circom + SnarkJS tutorial with circuit and proof workflow.
- [0xPARC circom and Halo2 learning resources](https://learn.0xparc.org) - Curated learning paths and materials for Circom and Halo2.
- [Zokrates Hello World Walkthrough](https://hackmd.io/@adietrichs/HkH0OduZw) - Step-by-step Zokrates Hello World walkthrough building a simple circuit.
- [zk-languages: A repo with basic example of most ZK languages](https://github.com/microbecode/zk-languages) - Tooling and codebase for zk-languages: A repo with basic example of most ZK languages.
- [plonkit: zkSNARK toolkit to work with circom DSL in PLONK proof system](https://github.com/fluidex/plonkit) - Tooling and codebase for plonkit: zkSNARK toolkit to work with circom DSL in PLONK proof system.
- [Plonk: A pure Rust PLONK implementation](https://github.com/ZK-Garage/plonk) - Tooling and codebase for Plonk: A pure Rust PLONK implementation.
- [zk-ECDSA: zkSNARKs for ECDSA](https://0xparc.org/blog/zk-ecdsa-1) - Article covering zk-ECDSA: zkSNARKs for ECDSA.
- [Spartan ECDSA: Fast in-browser ECDSA verification](https://github.com/personaelabs/spartan-ecdsa) - Tooling and codebase for Spartan ECDSA: Fast in-browser ECDSA verification.
- [ZoKrates: a toolbox for zkSNARKs on Ethereum](https://zokrates.github.io/) - Tooling and codebase for ZoKrates: a toolbox for zkSNARKs on Ethereum.
- [The State of Current Progress](https://delendum.xyz/2022/09/04/formal-verification-zk-constraint-systems.html#the-state-of-current-progress) - Article covering The State of Current Progress.
- [zkREPL: an in-browser collaborative development environment](https://zkrepl.dev/) - Tooling and codebase for zkREPL: an in-browser collaborative development environment.
- [Arkworks: an ecosystem for developing with zkSNARKs](https://github.com/arkworks-rs) - Rust libraries for fields, curves, pairings, and constraint systems.

### zkEVMs & zkVMs
Execution proving stacks, recursion, and general-purpose zkVM research.

- [Notes on Halo](https://raw.githubusercontent.com/arnaucube/math/master/notes_halo.pdf) - Concise notes on Halo recursion and inner-product arguments.
- [Matter Labs zkEVM](https://blog.matter-labs.io/unisync-a-port-of-uniswap-v2-on-the-zkevm-b12954748504) - Article covering Matter Labs zkEVM.
- [Recursive Proof Composition without a Trusted Setup](https://eprint.iacr.org/2019/1021.pdf) - Research paper on Recursive Proof Composition without a Trusted Setup.
- [Georgetown University COSC 544 Class Notes](https://people.cs.georgetown.edu/jthaler/COSC544.html) - Article covering Georgetown University COSC 544 Class Notes.
- [Hermez zkEVM](https://blog.hermez.io/introducing-hermez-zkevm/) - Article covering Hermez zkEVM.
- [Scroll](https://hackmd.io/@yezhang/S1sJ2cEWY) - and their [zkEVM](https://hackmd.io/@yezhang/S1_KMMbGt)
- [Appliedzkp: Circuits for zkEVM](https://github.com/appliedzkp/zkevm-circuits) - Article covering Appliedzkp: Circuits for zkEVM.
- [ConsenSys zkEVM](https://ethresear.ch/uploads/short-url/3DM8kjFfIG6PHXu4qpYpmujXgme.pdf) - and their [gnark library](https://github.com/consensys/gnark)
- [TinyZKEVM](https://github.com/leonardoalt/tinyzkevm) - Article covering TinyZKEVM.
- [Sovereign Labs: zkEVM on Risc0](https://github.com/Sovereign-Labs/ethereum-vpm) - Article covering Sovereign Labs: zkEVM on Risc0.
- [Vitalik Buterin: Halo and more: exploring incremental verification and SNARKs without pairings](https://vitalik.eth.limo/general/2021/11/05/halo.html) - Proof size reduction
- [Pinocchio: Nearly Practical Verifiable Computation](https://eprint.iacr.org/2013/279.pdf) - Research paper on Pinocchio: Nearly Practical Verifiable Computation.
- [Bulletproofs+: Shorter Proofs for Privacy-Enhanced Distributed Ledger](https://eprint.iacr.org/2020/735) - Article covering Bulletproofs+: Shorter Proofs for Privacy-Enhanced Distributed Ledger.
- [POSEIDON: A New Hash Function for Zero-Knowledge Proof Systems](https://eprint.iacr.org/2019/458.pdf) - Research paper on POSEIDON: A New Hash Function for Zero-Knowledge Proof Systems.
- [Zether: Towards Privacy in a Smart Contract World](https://eprint.iacr.org/2019/191.pdf) - Research paper on Zether: Towards Privacy in a Smart Contract World.
- [MANY-OUT-OF-MANY PROOFS](https://eprint.iacr.org/2020/293.pdf) - Research paper on MANY-OUT-OF-MANY PROOFS.
- [Quisquis: A New Design for Anonymous Cryptocurrencies](https://eprint.iacr.org/2018/990.pdf) - Research paper on Quisquis: A New Design for Anonymous Cryptocurrencies.

### Applications & Projects
Real-world systems and use cases built with ZK.

- [ZKML: Verifiable Machine Learning using Zero-Knowledge Proof](https://kudelskisecurity.com/modern-ciso-blog/zkml-verifiable-machine-learning-using-zero-knowledge-proof) - Overview of ZKML and how ZKPs can verify ML training or inference without leaks.
- [A Practical Guide To Building Zero Knowledge dApps](https://kndrck.co/posts/practical_guide_build_zk_dapps/) - Hands-on guide to building a ZK dApp with Circom and SnarkJS.
- [Delphinus zkWASM](https://delphinuslab.com/zk-wasm/) - and their [github](https://github.com/DelphinusLab/zkWasm)
- [zkMove: bytecode VM](https://www.zkmove.net/) - and their [github](https://github.com/young-rocks/zkmove)
- [zkRiscV: RV32I Risc-V instruction set](https://github.com/lucasgleba/zkRiscV) - Article covering zkRiscV: RV32I Risc-V instruction set.
- [OlaVM: An Ethereum compatible ZKVM](https://olavm.org/) - Article covering OlaVM: An Ethereum compatible ZKVM.
- [Tritron VM](https://github.com/TritonVM/triton-vm) - Article covering Tritron VM.

### ZK Media & Community
Podcasts, newsletters, and community programs for staying current.

- [Zero Knowledge Podcast](https://zeroknowledge.fm/) - Podcast and blog covering ZK research, builders, and ecosystem updates.
- [zkMesh: a monthly newsletter](https://zkmesh.substack.com/) - Monthly newsletter on privacy-preserving tech and ZK systems.
- [0xPARC: Program for Applied Research in Cryptography](https://0xparc.org/blog/program-for-applied-research) - Applied ZK research community program and learning hub.
- [ZPrize: accelerate zero-knowledge cryptography](https://www.zprize.io/) - Competition for accelerating ZK cryptography with challenges and resources.
- [ZK Hash Bounties](https://www.zkhashbounties.info/) - Ethereum Foundation bounty program for ZK hash function cryptanalysis.
- [ZKHack Discord](https://discord.com/invite/tHXyEbEqVN) - Community Discord for ZK Hack participants and study groups.

### Security & Exploitation
Soundness pitfalls, attack surfaces, and real-world exploit learnings.
- [LearnAI — zkSync Interactive Course](https://www.uselearnai.com/chat?topic=zkSync+Era) — AI-powered personal tutor for learning zkSync from scratch through conversation

- [SoK: What don't we know? Understanding Security Vulnerabilities in SNARKs](https://arxiv.org/abs/2402.15293) - Systematization-of-knowledge paper surveying real-world SNARK vulnerabilities.
- [Fuzzing Processing Pipelines for Zero-Knowledge Circuits](https://arxiv.org/abs/2411.02077) - Fuzzing study on ZK circuit pipelines and bug-finding strategies.
- [Reproducing and Exploiting ZK Circuit Vulnerabilities](https://blog.zksecurity.xyz/posts/zkbugs/) - ZK/SEC writeup on reproducing real circuit bugs and exploit patterns.
- [Specialized Zero-Knowledge Proof Failures](https://blog.trailofbits.com/2022/11/29/specialized-zero-knowledge-proof-failures/) - Trail of Bits post analyzing niche ZK failures and missing checks.
- [Trail of Bits: Zero-Knowledge Blog Category](https://blog.trailofbits.com/categories/zero-knowledge/) - Collection of Trail of Bits posts on zero-knowledge vulnerabilities and audits.
---

© [muellerberndt](https://twitter.com/muellerberndt) · [GitHub](https://github.com/muellerberndt)
