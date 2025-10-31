export default interface Movie {
    id: number;
    title: string;
    description: string;
    duration: string;
    ageRating: string;
    approvalRating: number;
    providerLogoUrl: string;
    isTop10: boolean;
}