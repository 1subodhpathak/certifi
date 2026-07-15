import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level Web3 & Blockchain assessment.
// Questions cover blockchain fundamentals, wallets, cryptography,
// Ethereum, smart contracts, consensus, DeFi, NFTs, DAOs, oracles,
// Layer 2, bridges, IPFS, token standards, security, and production Web3 judgment.
export const web3Data = {
  id: ASSESSMENT_TYPES.web3,
  title: 'Web3 & Blockchain Developer Professional Certification',
  shortTitle: 'Web3',
  category: 'Advanced Tech',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Professional Web3 assessment covering blockchain fundamentals, decentralization, wallets, cryptography, Ethereum, smart contracts, consensus mechanisms, gas, DeFi, DAOs, NFTs, Layer 2 scaling, oracles, IPFS, token standards, bridges, and smart contract security.',
  instructions:
    'Choose the best answer for each Web3 scenario. Questions move from fundamentals to practical blockchain engineering and security judgment.',
  questions: [
    {
      id: 'w3-01',
      type: 'mcq',
      title: 'Web3 Core Idea',
      prompt: 'What is the defining idea behind Web3?',
      options: [
        'Better graphics for websites',
        'Decentralization, programmable ownership, and user-controlled digital assets',
        'Faster Wi-Fi connections',
        'A new version of HTML'
      ],
      correctIndex: 1,
      explanation:
        'Web3 focuses on decentralized networks, user ownership, programmable assets, and reduced reliance on centralized intermediaries.'
    },
    {
      id: 'w3-02',
      type: 'mcq',
      title: 'Blockchain',
      prompt: 'What is a blockchain?',
      options: [
        'A chain of physical computers',
        'A distributed ledger where transactions are grouped into cryptographically linked blocks',
        'A private spreadsheet owned by one company',
        'A type of hardware wallet'
      ],
      correctIndex: 1,
      explanation:
        'A blockchain records transactions in blocks that are linked using cryptographic hashes and replicated across many nodes.'
    },
    {
      id: 'w3-03',
      type: 'mcq',
      title: 'Immutability',
      prompt: 'What does immutability mean in a blockchain context?',
      options: [
        'Data can never be read',
        'Past records are difficult to alter without network consensus',
        'Transactions are always free',
        'Users cannot create new accounts'
      ],
      correctIndex: 1,
      explanation:
        'Blockchain records become difficult to change because altering history would require changing linked blocks and convincing the network.'
    },
    {
      id: 'w3-04',
      type: 'mcq',
      title: 'Full Node',
      prompt: 'What is a full node?',
      options: [
        'A node that validates blocks and transactions according to protocol rules',
        'A user profile with many tokens',
        'A browser extension wallet',
        'A type of NFT marketplace'
      ],
      correctIndex: 0,
      explanation:
        'Full nodes independently verify blockchain rules and help preserve decentralization and network integrity.'
    },
    {
      id: 'w3-05',
      type: 'mcq',
      title: 'Wallet',
      prompt: 'What does a crypto wallet primarily manage?',
      options: [
        'Private keys used to control blockchain accounts',
        'Only fiat bank balances',
        'Only profile pictures',
        'Validator hardware temperature'
      ],
      correctIndex: 0,
      explanation:
        'A wallet manages keys and signs transactions. It does not physically store coins; assets are recorded on-chain.'
    },
    {
      id: 'w3-06',
      type: 'mcq',
      title: 'Seed Phrase',
      prompt: 'What is a seed phrase used for?',
      options: [
        'Recovering a wallet and the private keys derived from it',
        'Choosing a blockchain logo',
        'Paying gas fees',
        'Setting an NFT image size'
      ],
      correctIndex: 0,
      explanation:
        'A seed phrase is a recovery secret. Anyone with it can typically control the associated wallet assets.'
    },
    {
      id: 'w3-07',
      type: 'mcq',
      title: 'Private Key',
      prompt: 'Why must a private key remain secret?',
      options: [
        'It controls the ability to sign transactions from the account',
        'It is used only to view public blockchain data',
        'It is the same as a username',
        'It is required only for reading NFT metadata'
      ],
      correctIndex: 0,
      explanation:
        'A private key authorizes transactions. If exposed, an attacker may transfer assets from the account.'
    },
    {
      id: 'w3-08',
      type: 'mcq',
      title: 'Public Key Cryptography',
      prompt: 'Which cryptographic model is fundamental to blockchain account ownership?',
      options: [
        'Public-key cryptography',
        'Password-only authentication',
        'Plain text authentication',
        'Image-based authentication'
      ],
      correctIndex: 0,
      explanation:
        'Public-private key pairs allow users to prove ownership and sign transactions without revealing private keys.'
    },
    {
      id: 'w3-09',
      type: 'mcq',
      title: 'Hash Function',
      prompt: 'What is a cryptographic hash function used for in blockchains?',
      options: [
        'Creating fixed-size fingerprints of data',
        'Making transactions reversible',
        'Removing the need for nodes',
        'Increasing token prices'
      ],
      correctIndex: 0,
      explanation:
        'Hashes help link blocks, verify data integrity, and identify content or transactions.'
    },
    {
      id: 'w3-10',
      type: 'mcq',
      title: 'Proof of Work',
      prompt: 'What is Proof of Work?',
      options: [
        'A consensus mechanism that requires computational work to propose valid blocks',
        'A resume verification method',
        'A wallet backup format',
        'A DeFi lending strategy'
      ],
      correctIndex: 0,
      explanation:
        'Proof of Work secures networks such as Bitcoin by requiring miners to perform computational work.'
    },
    {
      id: 'w3-11',
      type: 'mcq',
      title: 'Proof of Stake',
      prompt: 'What is Proof of Stake?',
      options: [
        'A consensus mechanism where validators stake assets and can be rewarded or penalized',
        'A way to cook steak',
        'A proof that an NFT image exists',
        'A bridge between two exchanges'
      ],
      correctIndex: 0,
      explanation:
        'Proof of Stake uses validators who lock stake as collateral and participate in proposing or validating blocks.'
    },
    {
      id: 'w3-12',
      type: 'mcq',
      title: 'Gas Fees',
      prompt: 'What are gas fees?',
      options: [
        'Fees paid for computation and transaction processing on a blockchain network',
        'Fuel costs for mining hardware only',
        'Monthly wallet subscription charges',
        'A tax paid to NFT artists'
      ],
      correctIndex: 0,
      explanation:
        'Gas fees compensate validators or block producers for processing transactions and executing smart contract logic.'
    },
    {
      id: 'w3-13',
      type: 'mcq',
      title: 'Mempool',
      prompt: 'What is the mempool?',
      options: [
        'A waiting area for pending transactions before they are included in a block',
        'A storage pool for NFT images',
        'A password manager',
        'A smart contract compiler'
      ],
      correctIndex: 0,
      explanation:
        'The mempool contains transactions waiting to be selected and confirmed by block producers or validators.'
    },
    {
      id: 'w3-14',
      type: 'mcq',
      title: 'Transaction Nonce',
      prompt: 'What is a nonce commonly used for in Ethereum-style accounts?',
      options: [
        'Tracking transaction order and preventing replay from the same account',
        'Choosing a wallet color',
        'Compressing NFT images',
        'Replacing gas fees'
      ],
      correctIndex: 0,
      explanation:
        'A nonce helps order transactions from an account and prevents duplicate execution.'
    },
    {
      id: 'w3-15',
      type: 'mcq',
      title: 'Smart Contract',
      prompt: 'What is a smart contract?',
      options: [
        'Program code deployed on a blockchain that executes according to defined rules',
        'A PDF legal agreement only',
        'A password-protected spreadsheet',
        'A centralized customer support bot'
      ],
      correctIndex: 0,
      explanation:
        'Smart contracts are programs that run on blockchain networks and can manage assets or enforce logic.'
    },
    {
      id: 'w3-16',
      type: 'mcq',
      title: 'EVM',
      prompt: 'What does EVM stand for?',
      options: [
        'Ethereum Virtual Machine',
        'Encrypted Vault Method',
        'External Validation Module',
        'Electronic Value Market'
      ],
      correctIndex: 0,
      explanation:
        'The Ethereum Virtual Machine is the runtime environment for executing Ethereum smart contracts.'
    },
    {
      id: 'w3-17',
      type: 'mcq',
      title: 'DApp',
      prompt: 'What is a DApp?',
      options: [
        'A decentralized application that uses blockchain or smart contracts as part of its backend logic',
        'A desktop-only application',
        'A drawing application',
        'A private bank dashboard'
      ],
      correctIndex: 0,
      explanation:
        'DApps typically combine frontend interfaces with smart contracts and wallet-based interactions.'
    },
    {
      id: 'w3-18',
      type: 'mcq',
      title: 'DAO',
      prompt: 'What does DAO stand for?',
      options: [
        'Decentralized Autonomous Organization',
        'Digital Asset Office',
        'Distributed Analytics Order',
        'Data Access Object'
      ],
      correctIndex: 0,
      explanation:
        'DAOs coordinate communities through rules, proposals, voting, and treasury management.'
    },
    {
      id: 'w3-19',
      type: 'mcq',
      title: 'Governance Tokens',
      prompt: 'What is a common use of governance tokens?',
      options: [
        'Voting on protocol proposals or parameter changes',
        'Guaranteeing risk-free profits',
        'Increasing internet speed',
        'Replacing all legal agreements'
      ],
      correctIndex: 0,
      explanation:
        'Governance tokens may allow holders to vote on protocol upgrades, treasury use, or parameter changes.'
    },
    {
      id: 'w3-20',
      type: 'mcq',
      title: 'NFT',
      prompt: 'What makes an NFT non-fungible?',
      options: [
        'It represents a unique token that is not interchangeable one-for-one with another token',
        'It is always a JPEG',
        'It is always expensive',
        'It cannot be transferred'
      ],
      correctIndex: 0,
      explanation:
        'Non-fungible tokens represent unique assets or records, unlike fungible tokens where each unit is interchangeable.'
    },
    {
      id: 'w3-21',
      type: 'mcq',
      title: 'ERC-20',
      prompt: 'What is ERC-20 commonly used for?',
      options: [
        'Fungible tokens on Ethereum-compatible networks',
        'Only unique NFT collectibles',
        'Only wallet seed phrases',
        'Only blockchain node hardware'
      ],
      correctIndex: 0,
      explanation:
        'ERC-20 defines a common interface for fungible tokens such as utility tokens, governance tokens, and stablecoins.'
    },
    {
      id: 'w3-22',
      type: 'mcq',
      title: 'ERC-721',
      prompt: 'What is ERC-721 commonly associated with?',
      options: [
        'Non-fungible tokens',
        'Gas price estimation only',
        'Validator staking rewards',
        'Private key encryption'
      ],
      correctIndex: 0,
      explanation:
        'ERC-721 is a common token standard for unique NFTs.'
    },
    {
      id: 'w3-23',
      type: 'mcq',
      title: 'Stablecoin',
      prompt: 'What is a stablecoin?',
      options: [
        'A crypto asset designed to track the value of another asset such as a fiat currency',
        'A coin that cannot be transferred',
        'A wallet with no private key',
        'A blockchain node type'
      ],
      correctIndex: 0,
      explanation:
        'Stablecoins are designed to reduce price volatility by referencing assets such as the US dollar.'
    },
    {
      id: 'w3-24',
      type: 'mcq',
      title: 'DeFi',
      prompt: 'What is DeFi?',
      options: [
        'Decentralized finance applications such as lending, trading, borrowing, and yield protocols',
        'A design framework for mobile apps',
        'A private bank branch system',
        'A hardware wallet brand only'
      ],
      correctIndex: 0,
      explanation:
        'DeFi uses smart contracts to provide financial services without traditional centralized intermediaries.'
    },
    {
      id: 'w3-25',
      type: 'mcq',
      title: 'Automated Market Maker',
      prompt: 'What is an AMM in DeFi?',
      options: [
        'A smart contract system that enables token swaps using liquidity pools',
        'A customer support agent',
        'A centralized order book managed by one broker',
        'A tool for editing NFT images'
      ],
      correctIndex: 0,
      explanation:
        'Automated market makers use liquidity pools and formulas to price swaps without a traditional order book.'
    },
    {
      id: 'w3-26',
      type: 'mcq',
      title: 'Liquidity Pool',
      prompt: 'What is a liquidity pool?',
      options: [
        'A pool of tokens locked in a smart contract to support trading or lending',
        'A private bank account',
        'A list of unconfirmed transactions',
        'A hardware mining setup'
      ],
      correctIndex: 0,
      explanation:
        'Liquidity pools allow DeFi protocols to provide trading, lending, or other financial functions.'
    },
    {
      id: 'w3-27',
      type: 'mcq',
      title: 'Oracle',
      prompt: 'What is an oracle in Web3?',
      options: [
        'A service that provides external data to smart contracts',
        'A type of private key',
        'A mining algorithm',
        'A wallet backup phrase'
      ],
      correctIndex: 0,
      explanation:
        'Oracles connect off-chain data, such as asset prices or weather data, to on-chain smart contracts.'
    },
    {
      id: 'w3-28',
      type: 'mcq',
      title: 'Oracle Risk',
      prompt: 'Why can oracle design be a security risk?',
      options: [
        'Incorrect or manipulated oracle data can cause smart contracts to execute incorrect financial logic',
        'Oracles always remove all smart contract risk',
        'Oracles prevent transactions from being signed',
        'Oracles make wallets unnecessary'
      ],
      correctIndex: 0,
      explanation:
        'Many DeFi protocols rely on oracle data. If that data is stale, manipulated, or centralized, the protocol may be exploited.'
    },
    {
      id: 'w3-29',
      type: 'mcq',
      title: 'Layer 2',
      prompt: 'What is a Layer 2 solution?',
      options: [
        'A scaling system built on top of a Layer 1 blockchain to improve throughput or reduce costs',
        'A second password for a wallet',
        'A replacement for all smart contracts',
        'A graphics layer in a browser'
      ],
      correctIndex: 0,
      explanation:
        'Layer 2 systems process transactions more efficiently while relying on the base chain for security or settlement.'
    },
    {
      id: 'w3-30',
      type: 'mcq',
      title: 'Rollups',
      prompt: 'What is the basic idea behind rollups?',
      options: [
        'Bundle many transactions and post compressed data or proofs to a base chain',
        'Store all private keys on-chain',
        'Delete old blocks to save space',
        'Make every transaction free forever'
      ],
      correctIndex: 0,
      explanation:
        'Rollups improve scalability by executing transactions off the base layer while anchoring security or data to it.'
    },
    {
      id: 'w3-31',
      type: 'mcq',
      title: 'Optimistic vs ZK Rollups',
      prompt: 'What is a simplified difference between optimistic rollups and zero-knowledge rollups?',
      options: [
        'Optimistic rollups assume transactions are valid unless challenged; ZK rollups use validity proofs',
        'ZK rollups do not use cryptography',
        'Optimistic rollups cannot process transactions',
        'They are exactly the same'
      ],
      correctIndex: 0,
      explanation:
        'Optimistic rollups rely on challenge periods, while ZK rollups use cryptographic validity proofs.'
    },
    {
      id: 'w3-32',
      type: 'mcq',
      title: 'Bridge',
      prompt: 'What is a blockchain bridge?',
      options: [
        'A mechanism for moving assets or messages between blockchain networks',
        'A tool for mining Bitcoin',
        'A private key generator',
        'A wallet theme'
      ],
      correctIndex: 0,
      explanation:
        'Bridges enable cross-chain movement but can introduce smart contract, validator, custody, and liquidity risks.'
    },
    {
      id: 'w3-33',
      type: 'mcq',
      title: 'Bridge Risk',
      prompt: 'Why are cross-chain bridges often considered high-risk infrastructure?',
      options: [
        'They may custody or lock large amounts of value and depend on complex verification assumptions',
        'They always remove security risk',
        'They only display NFT art',
        'They do not interact with smart contracts'
      ],
      correctIndex: 0,
      explanation:
        'Bridge failures can be severe because they often secure large asset pools and depend on cross-chain trust assumptions.'
    },
    {
      id: 'w3-34',
      type: 'mcq',
      title: 'IPFS',
      prompt: 'What is IPFS commonly used for in Web3?',
      options: [
        'Content-addressed, peer-to-peer storage and retrieval of files or metadata',
        'Replacing all wallets',
        'Signing Ethereum transactions',
        'Calculating gas prices only'
      ],
      correctIndex: 0,
      explanation:
        'IPFS uses content addressing, making it useful for storing decentralized metadata and media references.'
    },
    {
      id: 'w3-35',
      type: 'mcq',
      title: 'Content Addressing',
      prompt: 'What does content addressing mean?',
      options: [
        'Content is identified by what it is, usually through a cryptographic hash, rather than where it is stored',
        'Content is identified only by a company URL',
        'Content is stored only on one server',
        'Content can never be copied'
      ],
      correctIndex: 0,
      explanation:
        'Content addressing lets systems retrieve data by its fingerprint, helping verify integrity.'
    },
    {
      id: 'w3-36',
      type: 'mcq',
      title: 'Hard Fork',
      prompt: 'What is a hard fork?',
      options: [
        'A protocol change that is not backward compatible and can split the network if not adopted consistently',
        'A normal wallet login',
        'A temporary mempool delay',
        'A gas fee discount'
      ],
      correctIndex: 0,
      explanation:
        'Hard forks require network participants to upgrade to new rules or remain on an incompatible chain.'
    },
    {
      id: 'w3-37',
      type: 'mcq',
      title: 'Finality',
      prompt: 'What does transaction finality mean?',
      options: [
        'The point at which a transaction is considered irreversible or extremely unlikely to be reverted',
        'The point when a wallet is installed',
        'The first time a transaction appears in a UI',
        'The number of NFTs in a collection'
      ],
      correctIndex: 0,
      explanation:
        'Finality is important for settlement, exchanges, bridges, and high-value transfers.'
    },
    {
      id: 'w3-38',
      type: 'mcq',
      title: 'Reentrancy',
      prompt: 'What is a reentrancy attack?',
      options: [
        'An external call re-enters a vulnerable smart contract before its state is safely updated',
        'A wallet login issue',
        'A blockchain running out of blocks',
        'An NFT image loading slowly'
      ],
      correctIndex: 0,
      explanation:
        'Reentrancy can allow attackers to repeatedly execute logic, such as withdrawals, before balances are updated.'
    },
    {
      id: 'w3-39',
      type: 'mcq',
      title: 'Smart Contract Security',
      prompt: 'Which practice helps reduce smart contract security risk?',
      options: [
        'Audits, tests, formal checks where appropriate, least privilege, safe external calls, and defense-in-depth',
        'Deploying without tests to save gas',
        'Keeping admin keys in public repos',
        'Ignoring oracle and bridge assumptions'
      ],
      correctIndex: 0,
      explanation:
        'Smart contract bugs can be irreversible. Strong security requires testing, review, careful design, and operational controls.'
    },
    {
      id: 'w3-40',
      type: 'mcq',
      title: 'Advanced Web3 Judgment',
      prompt: 'A DeFi protocol is ready to launch but depends on a new unaudited bridge and a single price oracle. What is the best decision?',
      options: [
        'Launch immediately because first-mover advantage matters',
        'Delay or limit launch scope until bridge, oracle, monitoring, circuit breakers, and risk controls are validated',
        'Hide the dependency risk from users',
        'Remove tests to ship faster'
      ],
      correctIndex: 1,
      explanation:
        'Production Web3 systems must treat bridges, oracles, admin keys, monitoring, and pause mechanisms as critical risk areas.'
    }
  ]
};