/**
 * 
 * You are given a network of computers connected by cables. A cable connects two computers and can transmit data in both directions.

A fully-connected network is a network where all computers can communicate with each other by transmitting data through cables. For example:

1. the following network is fully-connected:
    3
    |
0---1---2---4


2. the following network is not fully-connected:
    3
    |
0---1     2---4

Example 2 is not fully-connected because computers 2 and 0 cannot communicate.
There are other such pairs of computers that cannot communicate like 4 and 1, etc..
A fully-connected network is also considered minimal if it uses as few cables as possible. For example:
1. the following network is fully-connected AND minimal:
   3
   |
0--1--2--4


2. the following network is fully-connected BUT NOT minimal:
    3
   | \
0--1--2--4

Example 2 is not minimal because either cable (3,1) or (3,2) or (1,2) is not needed to keep the network fully-connected.
You are given a computer network that started out as fully-connected and minimal, but someone added exacty one extra cable. Your job is to find a cable that can be safely removed, ensuring network is fully-connected and minimal.

Write a function that takes in number numComputers and an array of cables that connect the computers. Computers have ids from 0 to numComputers - 1. The function should return a cable that can be safely removed. There will be multiple possible cables that can be chosen; you may return any of them.
 */

const find = (roots, node) => {
    if(roots[node] === node)
      return node
    const root = find(roots, roots[node])
    roots[node] = root
    return root
  }
  
  const union = (roots, sizes, nodeA, nodeB) => {
    const rootA = find(roots, nodeA)
    const rootB = find(roots, nodeB)
    console.log(`${nodeA} -> ${rootA} | ${nodeB} -> ${rootB}`)
    if(rootA === rootB)
      return true
  
    if(sizes[rootA] >= sizes[rootB]){
      roots[rootB] = rootA
      sizes[rootA] += sizes[rootB]
    }else{
      roots[rootA] = rootB
      sizes[rootB] += sizes[rootA]
      
    }
  
    return false
  }
  
  const extraCable = (numComputers, cables) => {
    const roots = []
    const sizes = []
    for(let i = 0; i < numComputers; i++){
      roots.push(i)
      sizes.push(1)
    }
  
    for(let [src, dest] of cables){
      const sameComponent = union(roots, sizes, src, dest)
      if(sameComponent)
        return [src, dest]
    }
    return []
  };
  
  module.exports = {
    extraCable,
  };
  
  const edge = extraCable(6, [
    [0, 4],
    [4, 5],
    [3, 4],
    [5, 1],
    [1, 3],
    [2, 4],
  ]); 
  console.log(edge)
  