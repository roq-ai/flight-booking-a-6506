interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Travel Agent'],
  tenantName: 'Airline',
  applicationName: 'Flight Booking Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read airline information',
    'Update personal user information',
    'Read personal user information',
    'View airlines',
  ],
  ownerAbilities: ['Manage users', 'Manage airlines'],
  getQuoteUrl: 'https://app.roq.ai/proposal/dac8a3f2-9927-4315-a264-c641abe45047',
};
