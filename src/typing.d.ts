declare interface DAppInterface {

    /**
     * 
     * @param {*} permissions 
     * @returns {{ result }}
     */
     popupWallet(): Promise<{ result: boolean }>

    /**
     * 
     * @param {*} permissions 
     * @returns {{ result }}
     */
    hasPermissions(permissions = ALL_PERMISSION_TYPES): Promise<{ result: boolean }>

    /**
     * 
     * @param {*} permissions 
     * @returns {{ result }}
     */
    requestPermissions(permissions = ALL_PERMISSION_TYPES): Promise<{ result: boolean }>

    /**
     * 
     * @param {*} permissions 
     * @returns {{ accounts }}
     */
    getAccounts(): Promise<{ accounts: any[] }>

    /**
     * 
     * @param {*} permissions 
     * @returns {{ result }}
     */
    executeMoveCall(transaction): Promise<{ result: boolean }>
    
    /**
     * 
     * @param {*} permissions 
     * @returns {{ result }}
     */
    executeSerializedMoveCall(transactionBytes): Promise<{ result: boolean }>
}

  // const ALL_PERMISSION_TYPES = [
  //   'viewAccount',
  //   'suggestTransactions',
  // ];
  // __CoinstartWalletInjector__

declare global {
  var __CoinstartWalletInjector__: DAppInterface;
}
