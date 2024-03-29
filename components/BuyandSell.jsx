"use client"
import React, { useEffect, useState } from 'react'
import { Table, Tag } from 'antd'
import eth from '../public/assets/eth.svg'

const data = {
    "buys": [

        {
            "token_name": "Physics",
            "token_symbol": "Physics",
            "token_logo": "https://logo.moralis.io/0x1_0x8e1308f4808788767a864eee9a4927e38c790352_f62b5a0052704e68a3f59c07d3ca76aa",
            "token_decimals": "18",
            "from_address": "0x35d7f0b82a9a3876bccc2d23efafad57dd94a7b7",
            "from_address_label": null,
            "to_address": "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
            "to_address_label": null,
            "address": "0x8e1308f4808788767a864eee9a4927e38c790352",
            "block_hash": "0x2b33c1941109f5154663c105d6ab4abc2b30bcdf07d1cfb0ff4239ad1dbd591b",
            "block_number": "19303900",
            "block_timestamp": "2024-02-25T10:08:11.000Z",
            "transaction_hash": "0x5dfd6634d7ee11a3d2ef47c4db81a25caa464ed9af0307b0967eef14fbb32f79",
            "transaction_index": 91,
            "log_index": 149,
            "value": "25000000000000000000000000",
            "possible_spam": false,
            "value_decimal": "25000000",
            "verified_contract": true
        },
        {
            "token_name": "Physics",
            "token_symbol": "Physics",
            "token_logo": "https://logo.moralis.io/0x1_0x8e1308f4808788767a864eee9a4927e38c790352_f62b5a0052704e68a3f59c07d3ca76aa",
            "token_decimals": "18",
            "from_address": "0x35d7f0b82a9a3876bccc2d23efafad57dd94a7b7",
            "from_address_label": null,
            "to_address": "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
            "to_address_label": null,
            "address": "0x8e1308f4808788767a864eee9a4927e38c790352",
            "block_hash": "0xb09506f98fa7897ea8fd7f3ade7a349a273004fee644bb47d8b256d4af29e7ef",
            "block_number": "19294501",
            "block_timestamp": "2024-02-24T02:36:11.000Z",
            "transaction_hash": "0x912f3fae7412f38a21091e54aaab43792cbf20541c60057aa813b9cbe5b9b72d",
            "transaction_index": 100,
            "log_index": 182,
            "value": "25000050000000000000000000",
            "possible_spam": false,
            "value_decimal": "25000050",
            "verified_contract": true
        },
        {
            "token_name": "Physics",
            "token_symbol": "Physics",
            "token_logo": "https://logo.moralis.io/0x1_0x8e1308f4808788767a864eee9a4927e38c790352_f62b5a0052704e68a3f59c07d3ca76aa",
            "token_decimals": "18",
            "from_address": "0x35d7f0b82a9a3876bccc2d23efafad57dd94a7b7",
            "from_address_label": null,
            "to_address": "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
            "to_address_label": null,
            "address": "0x8e1308f4808788767a864eee9a4927e38c790352",
            "block_hash": "0xf8c6665e7e427abf8ba053e0c0f6794afb1cd2429e03f87a9cd7bd03608fb2b0",
            "block_number": "19294340",
            "block_timestamp": "2024-02-24T02:03:59.000Z",
            "transaction_hash": "0xe2e03477c6126adfd3b1d1cfa2fa15fd000a1ff01c9d55f1d46c7fce0ececacf",
            "transaction_index": 120,
            "log_index": 269,
            "value": "50000000000000000000000000",
            "possible_spam": false,
            "value_decimal": "50000000",
            "verified_contract": true
        },
        {
            "token_name": "Physics",
            "token_symbol": "Physics",
            "token_logo": "https://logo.moralis.io/0x1_0x8e1308f4808788767a864eee9a4927e38c790352_f62b5a0052704e68a3f59c07d3ca76aa",
            "token_decimals": "18",
            "from_address": "0x35d7f0b82a9a3876bccc2d23efafad57dd94a7b7",
            "from_address_label": null,
            "to_address": "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
            "to_address_label": null,
            "address": "0x8e1308f4808788767a864eee9a4927e38c790352",
            "block_hash": "0xda081c2b6df447214fa0b28514f140d5055540f62de39438441927c3f360ed05",
            "block_number": "19291728",
            "block_timestamp": "2024-02-23T17:17:59.000Z",
            "transaction_hash": "0x971b965cdc31baa66873542bdf3e30d2547ec205395cfc221c49e9881c0f07fb",
            "transaction_index": 123,
            "log_index": 626,
            "value": "750733609000000000000000000",
            "possible_spam": false,
            "value_decimal": "750733609",
            "verified_contract": true
        },
        {
            "token_name": "Physics",
            "token_symbol": "Physics",
            "token_logo": "https://logo.moralis.io/0x1_0x8e1308f4808788767a864eee9a4927e38c790352_f62b5a0052704e68a3f59c07d3ca76aa",
            "token_decimals": "18",
            "from_address": "0x35d7f0b82a9a3876bccc2d23efafad57dd94a7b7",
            "from_address_label": null,
            "to_address": "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
            "to_address_label": null,
            "address": "0x8e1308f4808788767a864eee9a4927e38c790352",
            "block_hash": "0xb9423d456cf8bbf2e28730e4b34c9013351f5f9c8aec8a4f0b02a83e571a26e1",
            "block_number": "19279664",
            "block_timestamp": "2024-02-22T00:41:59.000Z",
            "transaction_hash": "0x25702836767210f2605ec6c4e40d80ba1286af27df9da7541577047500e2a46b",
            "transaction_index": 73,
            "log_index": 77,
            "value": "598534623000000000000000000",
            "possible_spam": false,
            "value_decimal": "598534623",
            "verified_contract": true
        },
        {
            "token_name": "OPTI-XC",
            "token_symbol": "OPTI-XC",
            "token_logo": null,
            "token_decimals": "9",
            "from_address": "0x0000000000000000000000000000000000000000",
            "from_address_label": "Null Address: 0x000...000",
            "to_address": "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
            "to_address_label": null,
            "address": "0x29d4885c4c5b1c4554cbbea215ca8feec1216b8a",
            "block_hash": "0x5239ecb57b26cc0ec4c48a14bd56e7c176cecb092a953568cdf9a08faed8ebf7",
            "block_number": "19271327",
            "block_timestamp": "2024-02-20T20:35:35.000Z",
            "transaction_hash": "0x18b9d5ebe4f4051fa992598aff541757fef62cd87e1dc496996409e40fc15cb9",
            "transaction_index": 119,
            "log_index": 254,
            "value": "207986558486605",
            "possible_spam": false,
            "value_decimal": "207986.558486605",
            "verified_contract": false
        },
        {
            "token_name": "Physics",
            "token_symbol": "Physics",
            "token_logo": "https://logo.moralis.io/0x1_0x8e1308f4808788767a864eee9a4927e38c790352_f62b5a0052704e68a3f59c07d3ca76aa",
            "token_decimals": "18",
            "from_address": "0x35d7f0b82a9a3876bccc2d23efafad57dd94a7b7",
            "from_address_label": null,
            "to_address": "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
            "to_address_label": null,
            "address": "0x8e1308f4808788767a864eee9a4927e38c790352",
            "block_hash": "0x2309f90bfe403f85cc5e585f6d083a17616a020304308cdb46096ef9e31a7393",
            "block_number": "19269132",
            "block_timestamp": "2024-02-20T13:12:11.000Z",
            "transaction_hash": "0xc21567c038fbe2281531b125d602389aebf43bda617796756797a7e0a7eabb7c",
            "transaction_index": 127,
            "log_index": 168,
            "value": "50209688500000000000000000",
            "possible_spam": false,
            "value_decimal": "50209688.5",
            "verified_contract": true
        },
        {
            "token_name": "USD Coin",
            "token_symbol": "USDC",
            "token_logo": "https://logo.moralis.io/0x1_0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48_e6ec22e3ef954a7f9eda04f294938f4d",
            "token_decimals": "6",
            "from_address": "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc",
            "from_address_label": null,
            "to_address": "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
            "to_address_label": null,
            "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            "block_hash": "0xed3c52f74c83feb6b5a577a1575e5fd0068a93cf48641532fc8e62e0c8de8e58",
            "block_number": "19265087",
            "block_timestamp": "2024-02-19T23:36:47.000Z",
            "transaction_hash": "0x3e10bec609e865b0d81aba030a282eec0473fd6b91c9e306059514c21fc7b67f",
            "transaction_index": 176,
            "log_index": 322,
            "value": "4049755792",
            "possible_spam": false,
            "value_decimal": "4049.755792",
            "verified_contract": true
        },
        {
            "token_name": "Uniswap V2",
            "token_symbol": "UNI-V2",
            "token_logo": null,
            "token_decimals": "18",
            "from_address": "0x0000000000000000000000000000000000000000",
            "from_address_label": "Null Address: 0x000...000",
            "to_address": "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
            "to_address_label": null,
            "address": "0xbf2d68bd2f03c90dd2f373c7cec3b1e956a5c8f8",
            "block_hash": "0xb20b9eb2f0f378c496470dd5ca727fb1974cd1743df19b6fa1bc20d81d7d0c78",
            "block_number": "19257129",
            "block_timestamp": "2024-02-18T20:44:11.000Z",
            "transaction_hash": "0x6888e332651dd8a30e4dda17b73e2d381547318e37c06a035093225f41114511",
            "transaction_index": 258,
            "log_index": 380,
            "value": "50000000000000000000",
            "possible_spam": false,
            "value_decimal": "50",
            "verified_contract": false
        },
        {
            "token_name": "Uniswap V2",
            "token_symbol": "UNI-V2",
            "token_logo": null,
            "token_decimals": "18",
            "from_address": "0x0000000000000000000000000000000000000000",
            "from_address_label": "Null Address: 0x000...000",
            "to_address": "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
            "to_address_label": null,
            "address": "0xbf2d68bd2f03c90dd2f373c7cec3b1e956a5c8f8",
            "block_hash": "0x59ea16701f1343fa01f2b6389d603a4753adb5c6d12dd2b74691eb9c2e4a1798",
            "block_number": "19256711",
            "block_timestamp": "2024-02-18T19:19:23.000Z",
            "transaction_hash": "0x74f3ec7f59069bf480986b09c079b96bcabcc9d38be63dd97ef536ba85a08e01",
            "transaction_index": 103,
            "log_index": 254,
            "value": "29488391156000",
            "possible_spam": false,
            "value_decimal": "0.000029488391156",
            "verified_contract": false
        }
    ],
    "sells": [

        {
            "token_name": "USD Coin",
            "token_symbol": "USDC",
            "token_logo": "https://logo.moralis.io/0x1_0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48_e6ec22e3ef954a7f9eda04f294938f4d",
            "token_decimals": "6",
            "from_address": "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
            "from_address_label": null,
            "to_address": "0x429103710d842745aa64ae53f859a7f26cdf07ea",
            "to_address_label": null,
            "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            "block_hash": "0x171eebb2fc3991e1d6b1c1ff7943684f088cef904cb87c9e5c9815ff5fc432a5",
            "block_number": "19386658",
            "block_timestamp": "2024-03-07T23:44:47.000Z",
            "transaction_hash": "0xc3c8566dd05ba9d5b65618531e0a36b83e783ef7f440a49f946fb42d5089ac4c",
            "transaction_index": 308,
            "log_index": 647,
            "value": "250000000",
            "possible_spam": false,
            "value_decimal": "250",
            "verified_contract": true
        },
        {
            "token_name": "CuriosityAnon",
            "token_symbol": "CA",
            "token_logo": "https://logo.moralis.io/0x1_0xa0c7e61ee4faa9fcefdc8e8fc5697d54bf8c8141_c71b7d5015e24662ae56e635bcd3fd0d",
            "token_decimals": "18",
            "from_address": "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
            "from_address_label": null,
            "to_address": "0xa3d0199c28accdbd680ac461682d7a1f6f5c19a0",
            "to_address_label": null,
            "address": "0xa0c7e61ee4faa9fcefdc8e8fc5697d54bf8c8141",
            "block_hash": "0xeeeb578f285ea16ad4331ff30a4263b88e18376b9b8b96b7020b47567bf82563",
            "block_number": "19385977",
            "block_timestamp": "2024-03-07T21:27:59.000Z",
            "transaction_hash": "0xec46ecf450ed2e88806558052abfb198d1d81fef9483fdc52bcbeb6e2f28ba50",
            "transaction_index": 101,
            "log_index": 247,
            "value": "1124000000000000000000000000",
            "possible_spam": false,
            "value_decimal": "1124000000",
            "verified_contract": true
        },
        {
            "token_name": "Physics",
            "token_symbol": "Physics",
            "token_logo": "https://logo.moralis.io/0x1_0x8e1308f4808788767a864eee9a4927e38c790352_f62b5a0052704e68a3f59c07d3ca76aa",
            "token_decimals": "18",
            "from_address": "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
            "from_address_label": null,
            "to_address": "0x35d7f0b82a9a3876bccc2d23efafad57dd94a7b7",
            "to_address_label": null,
            "address": "0x8e1308f4808788767a864eee9a4927e38c790352",
            "block_hash": "0x47c7c8261f465d137c6aa8b4ff2fd1f87367c1e506037f080eb2e15a5cb3af65",
            "block_number": "19384263",
            "block_timestamp": "2024-03-07T15:42:47.000Z",
            "transaction_hash": "0x08bc645af6893837d3781bd19c252c841ef8c709be1bf784ded416b569567c65",
            "transaction_index": 154,
            "log_index": 387,
            "value": "1882141145000000000000000000",
            "possible_spam": false,
            "value_decimal": "1882141145",
            "verified_contract": true
        },
        {
            "token_name": "AirTor Protocol",
            "token_symbol": "ATOR",
            "token_logo": "https://logo.moralis.io/0x1_0x0f7b3f5a8fed821c5eb60049538a548db2d479ce_f5f8abb3eb34464e93ee50d90c7da7a1",
            "token_decimals": "18",
            "from_address": "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
            "from_address_label": null,
            "to_address": "0xa7480aafa8ad2af3ce24ac6853f960ae6ac7f0c4",
            "to_address_label": null,
            "address": "0x0f7b3f5a8fed821c5eb60049538a548db2d479ce",
            "block_hash": "0xe5c27cfc99048e2177aaf05257e10cd8dcd763b787ef4acbbec4bf8238391f82",
            "block_number": "19380981",
            "block_timestamp": "2024-03-07T04:42:59.000Z",
            "transaction_hash": "0x15fb8e033ec61bb1d8420acd2710e47673f6650a42d334fc73cfd650352f07f3",
            "transaction_index": 117,
            "log_index": 215,
            "value": "1920000000000000000000",
            "possible_spam": false,
            "value_decimal": "1920",
            "verified_contract": true
        },
        {
            "token_name": "AirTor Protocol",
            "token_symbol": "ATOR",
            "token_logo": "https://logo.moralis.io/0x1_0x0f7b3f5a8fed821c5eb60049538a548db2d479ce_f5f8abb3eb34464e93ee50d90c7da7a1",
            "token_decimals": "18",
            "from_address": "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
            "from_address_label": null,
            "to_address": "0x0f7b3f5a8fed821c5eb60049538a548db2d479ce",
            "to_address_label": "AirTor Protocol",
            "address": "0x0f7b3f5a8fed821c5eb60049538a548db2d479ce",
            "block_hash": "0xe5c27cfc99048e2177aaf05257e10cd8dcd763b787ef4acbbec4bf8238391f82",
            "block_number": "19380981",
            "block_timestamp": "2024-03-07T04:42:59.000Z",
            "transaction_hash": "0x15fb8e033ec61bb1d8420acd2710e47673f6650a42d334fc73cfd650352f07f3",
            "transaction_index": 117,
            "log_index": 214,
            "value": "80000000000000000000",
            "possible_spam": false,
            "value_decimal": "80",
            "verified_contract": true
        },
        {
            "token_name": "Physics",
            "token_symbol": "Physics",
            "token_logo": "https://logo.moralis.io/0x1_0x8e1308f4808788767a864eee9a4927e38c790352_f62b5a0052704e68a3f59c07d3ca76aa",
            "token_decimals": "18",
            "from_address": "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
            "from_address_label": null,
            "to_address": "0x35d7f0b82a9a3876bccc2d23efafad57dd94a7b7",
            "to_address_label": null,
            "address": "0x8e1308f4808788767a864eee9a4927e38c790352",
            "block_hash": "0x35e0940355b1d2f0c7c108050428f38cc249340315c847ae6b97970ffda4346e",
            "block_number": "19291884",
            "block_timestamp": "2024-02-23T17:49:11.000Z",
            "transaction_hash": "0xa2c440529ccbfea3989cee913c70706c4e0a9fb5eac424daba9decec36f6a376",
            "transaction_index": 169,
            "log_index": 208,
            "value": "4378395806000000000000000000",
            "possible_spam": false,
            "value_decimal": "4378395806",
            "verified_contract": true
        },
        {
            "token_name": "AirTor Protocol",
            "token_symbol": "ATOR",
            "token_logo": "https://logo.moralis.io/0x1_0x0f7b3f5a8fed821c5eb60049538a548db2d479ce_f5f8abb3eb34464e93ee50d90c7da7a1",
            "token_decimals": "18",
            "from_address": "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
            "from_address_label": null,
            "to_address": "0xa7480aafa8ad2af3ce24ac6853f960ae6ac7f0c4",
            "to_address_label": null,
            "address": "0x0f7b3f5a8fed821c5eb60049538a548db2d479ce",
            "block_hash": "0x08e2e6355b2a5458c7d5290e5a0f929017226c1484b8abce3661d9e1a9fb4248",
            "block_number": "19284998",
            "block_timestamp": "2024-02-22T18:42:11.000Z",
            "transaction_hash": "0x9249f54450e6a1722ee6224e0714389fc26d3e3ec2fbe244bba47b7bfd9bb47e",
            "transaction_index": 133,
            "log_index": 257,
            "value": "1920000000000000000000",
            "possible_spam": false,
            "value_decimal": "1920",
            "verified_contract": true
        },
        {
            "token_name": "AirTor Protocol",
            "token_symbol": "ATOR",
            "token_logo": "https://logo.moralis.io/0x1_0x0f7b3f5a8fed821c5eb60049538a548db2d479ce_f5f8abb3eb34464e93ee50d90c7da7a1",
            "token_decimals": "18",
            "from_address": "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
            "from_address_label": null,
            "to_address": "0x0f7b3f5a8fed821c5eb60049538a548db2d479ce",
            "to_address_label": "AirTor Protocol",
            "address": "0x0f7b3f5a8fed821c5eb60049538a548db2d479ce",
            "block_hash": "0x08e2e6355b2a5458c7d5290e5a0f929017226c1484b8abce3661d9e1a9fb4248",
            "block_number": "19284998",
            "block_timestamp": "2024-02-22T18:42:11.000Z",
            "transaction_hash": "0x9249f54450e6a1722ee6224e0714389fc26d3e3ec2fbe244bba47b7bfd9bb47e",
            "transaction_index": 133,
            "log_index": 256,
            "value": "80000000000000000000",
            "possible_spam": false,
            "value_decimal": "80",
            "verified_contract": true
        },
        {
            "token_name": "AirTor Protocol",
            "token_symbol": "ATOR",
            "token_logo": "https://logo.moralis.io/0x1_0x0f7b3f5a8fed821c5eb60049538a548db2d479ce_f5f8abb3eb34464e93ee50d90c7da7a1",
            "token_decimals": "18",
            "from_address": "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
            "from_address_label": null,
            "to_address": "0xa7480aafa8ad2af3ce24ac6853f960ae6ac7f0c4",
            "to_address_label": null,
            "address": "0x0f7b3f5a8fed821c5eb60049538a548db2d479ce",
            "block_hash": "0xf5de29bda8c9cd4bc7560da53c31b68f9ded26792b7b55ac6baf5986336db9b0",
            "block_number": "19280046",
            "block_timestamp": "2024-02-22T01:59:47.000Z",
            "transaction_hash": "0x7ee00f728878b985737fddfeb541b5dd75f18410c7b766dac58e4d344d49658b",
            "transaction_index": 92,
            "log_index": 200,
            "value": "2208000000000000000000",
            "possible_spam": false,
            "value_decimal": "2208",
            "verified_contract": true
        },
        {
            "token_name": "AirTor Protocol",
            "token_symbol": "ATOR",
            "token_logo": "https://logo.moralis.io/0x1_0x0f7b3f5a8fed821c5eb60049538a548db2d479ce_f5f8abb3eb34464e93ee50d90c7da7a1",
            "token_decimals": "18",
            "from_address": "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
            "from_address_label": null,
            "to_address": "0x0f7b3f5a8fed821c5eb60049538a548db2d479ce",
            "to_address_label": "AirTor Protocol",
            "address": "0x0f7b3f5a8fed821c5eb60049538a548db2d479ce",
            "block_hash": "0xf5de29bda8c9cd4bc7560da53c31b68f9ded26792b7b55ac6baf5986336db9b0",
            "block_number": "19280046",
            "block_timestamp": "2024-02-22T01:59:47.000Z",
            "transaction_hash": "0x7ee00f728878b985737fddfeb541b5dd75f18410c7b766dac58e4d344d49658b",
            "transaction_index": 92,
            "log_index": 199,
            "value": "92000000000000000000",
            "possible_spam": false,
            "value_decimal": "92",
            "verified_contract": true
        },
        {
            "token_name": "Physics",
            "token_symbol": "Physics",
            "token_logo": "https://logo.moralis.io/0x1_0x8e1308f4808788767a864eee9a4927e38c790352_f62b5a0052704e68a3f59c07d3ca76aa",
            "token_decimals": "18",
            "from_address": "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
            "from_address_label": null,
            "to_address": "0x35d7f0b82a9a3876bccc2d23efafad57dd94a7b7",
            "to_address_label": null,
            "address": "0x8e1308f4808788767a864eee9a4927e38c790352",
            "block_hash": "0xee519904dd6bdab863de2bdf66808ac0e8bf40468ed6fb1bd8b245ede60ffc1d",
            "block_number": "18978454",
            "block_timestamp": "2024-01-10T18:51:59.000Z",
            "transaction_hash": "0x4e7fa7e83421d4a552a122522ea8818a0c45bc689e62443a358355bf1c31b753",
            "transaction_index": 75,
            "log_index": 150,
            "value": "400000000000000000000000000",
            "possible_spam": false,
            "value_decimal": "400000000",
            "verified_contract": true
        }
    ]
}

const BuyandSell = () => {
    const columns = [
        {
            title: '',
            dataIndex: 'token_symbol',
            key: 'token_symbol',
            render: (text, record) => (
                <div>
                    {record.token_logo ? <img src={record.token_logo} alt={text} className='w-10 h-10 rounded-full' /> : <div className='w-10 h-10 bg-gray-200 rounded-full'></div>}
                </div>
            )
        },
        {
            title: 'Token  Name',
            dataIndex: 'token_symbol',
            key: 'token_symbol',
            render: (text, record) => (
                <div className='flex items-center justify-center gap-3'>
                    {text}
                </div>
            )
        },
        {
            title: 'Token Decimals',
            dataIndex: 'token_decimals',
            key: 'token_decimals',
        },
        {
            title: 'Value',
            dataIndex: 'value',
            key: 'value',
            render: text => parseFloat(text).toLocaleString()
        },
        {
            title: 'Verified Contract',
            dataIndex: 'verified_contract',
            key: 'verified_contract',
            render: (text, record) => (
                <div className='flex items-center justify-center gap-3'>
                    {record.verified_contract ? <Tag color="green">Verified</Tag> : <Tag color="red">Not Verified</Tag>}
                </div>
            )
        },
        {
            title: 'Possible Spam',
            dataIndex: 'possible_spam_time',
            key: 'possible_spam_time',
            render: (text, record) => (
                record.possible_spam ? new Date(text).toLocaleString() : 'No'
            )
        },
    ];
    return (
        <div className='w-4/5 text-black m-auto'>

       
                    <h2 className='text-center font-bold text-3xl text-[green]'>Buys</h2>
                    <Table
                        dataSource={data.buys}
                        columns={columns}
                        pagination={{ pageSize: 7 }}
                        rowKey={(record, index) => index}
                        size="small"
                    />
           
                    <h2 className='text-center font-bold text-3xl text-[red]'>Sells</h2>
                    <Table
                        dataSource={data.sells}
                        columns={columns}
                        pagination={{ pageSize: 7 }}
                        rowKey={(record, index) => index}
                        size="small"
                    />
            
        </div>
    )
}

export default BuyandSell
