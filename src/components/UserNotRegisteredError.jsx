import React from 'react';

export default function UserNotRegisteredError() {
  return (
    <div style={{padding: '24px', textAlign: 'center', color: '#f59e0b'}}>
      <h2>Access denied</h2>
      <p>User is not registered. Please sign up or contact support.</p>
    </div>
  );
}
