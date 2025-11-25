/**
 * Membership Product Configuration
 * Maps product IDs to their RRP (Recommended Retail Price)
 */
export const PRODUCT_CONFIG = {
    // Product ID: RRP
    32: 486,  // Assure Platinum Annual
    33: 45,   // Assure Platinum Monthly
    34: 378,  // Assure Gold Annual
    35: 35,   // Assure Gold Monthly
};

// Dealer ID - can be changed if necessary
export const DEALER_ID = 533;

// Campaign name
export const CAMPAIGN_NAME = 'joinassure';

/**
 * Get RRP for a product ID
 * @param {number} productId - The product ID
 * @returns {number|null} - The RRP or null if not found
 */
export function getRRP(productId) {
    return PRODUCT_CONFIG[productId] || null;
}

