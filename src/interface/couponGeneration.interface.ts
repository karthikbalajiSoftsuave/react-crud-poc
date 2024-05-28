export type ICouponGeneration = {

    couponCode: string
    discountType: string
    claimVariant: string
    couponDescription: string
    discountDetails: {
        amount: number,
        couponQuantity: number
    }
    validityDetails: {
        from: string,
        to: string,
        claimLimit: string,
        validityDays: number
    }
}