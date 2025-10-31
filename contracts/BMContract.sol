// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BMContract {
    address public owner;

    event BMSent(address indexed user, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function sendBM() public payable {
        require(msg.value > 0, "BM must be > 0");
        emit BMSent(msg.sender, msg.value);
    }

    function withdraw() public onlyOwner {
        (bool success, ) = owner.call{value: address(this).balance}("");
        require(success, "Withdrawal failed");
    }
}
