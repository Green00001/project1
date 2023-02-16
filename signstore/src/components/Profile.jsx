import React from "react";


async function getusers(db) {
    const user = collection(db, 'users');
    const userSnapshot = await getDocs(user);
    const userList = userSnapshot.docs.map(doc => doc.data());
    return userList;
  }