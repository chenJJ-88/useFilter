export const uuid = (): string => {
    const tempUrl = URL.createObjectURL(new Blob());
    const uuid = tempUrl.toString();
    URL.revokeObjectURL(tempUrl); // 释放这个url
    return uuid.substring(uuid.lastIndexOf('/') + 1);
}