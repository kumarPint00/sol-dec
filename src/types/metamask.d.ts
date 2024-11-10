declare module '@metamask/providers' {
    interface MetaMaskInpageProvider {
      isMetaMask?: boolean;
      request: (args: { method: string; params?: any[] }) => Promise<any>;
    }
  
    const MetaMaskInpageProvider: MetaMaskInpageProvider;
    export { MetaMaskInpageProvider };
  }
  