'use strict'

const AWS = require('aws-sdk')
const debug = require('debug')('node-rekognition:Rekognition')
const S3 = require('./S3')

module.exports = class Rekognition {
    constructor(AWSParameters) {
        this.rekognition = new AWS.Rekognition({
            accessKeyId: AWSParameters.accessKeyId,
            secretAccessKey: AWSParameters.secretAccessKey,
            region: AWSParameters.region
        })

        this.s3 = new S3(AWSParameters)
        this.bucket = AWSParameters.bucket
    }


    async uploadToS3(imagePaths, folder) {
        if (Array.isArray(imagePaths))
            return await this.s3.uploadMultiple(imagePaths, folder)
        else
            return await this.s3.upload(imagePaths, folder)
    }


    doCall(endpoint, params) {
        return new Promise((resolve, reject) => {
            this.rekognition[endpoint](params, function (err, data) {
                if (err) {
                    reject(err)
                }
                else
                    resolve(data)
            })
        })
    }


    async detectLabels(s3Image, threshold = 50) {
        const params = {
            Image: {
                S3Object: {
                    Bucket: this.bucket,
                    Name: s3Image.Key
                }
            },
            MaxLabels: 4096,
            MinConfidence: threshold
        }

        return await this.doCall('detectLabels', params)
    }


    async detectFaces(s3Image) {
        const params = {
            Image: {
                S3Object: {
                    Bucket: this.bucket,
                    Name: s3Image.Key
                }
            }
        }

        return await this.doCall('detectFaces', params)
    }


    async compareFaces(sourceS3Image, targetS3Image, threshold = 90) {
        const params = {
            SimilarityThreshold: threshold,
            SourceImage: {
                S3Object: {
                    Bucket: this.bucket,
                    Name: sourceS3Image.Key
                }
            },
            TargetImage: {
                S3Object: {
                    Bucket: this.bucket,
                    Name: targetS3Image.Key
                }
            }
        }

        return await this.doCall('compareFaces', params)
    }


    async detectModerationLabels(s3Image, threshold = 50) {
        const params = {
            Image: {
                S3Object: {
                    Bucket: this.bucket,
                    Name: s3Image.Key
                }
            },
            MinConfidence: threshold
        }

        return await this.doCall('detectModerationLabels', params)
    }

    async createCollection(collectionId) {
        const params = {
            CollectionId: collectionId
        }

        return await this.doCall('createCollection', params)
    }

    async deleteCollection(collectionId) {
        const params = {
            CollectionId: collectionId
        }

        return await this.doCall('deleteCollection', params)
    }


    async indexFaces(collectionId, s3Image) {
        var params = {
            CollectionId: collectionId,
            Image: {
                S3Object: {
                    Bucket: this.bucket,
                    Name: s3Image.Key
                }
            }
        }

        return await this.doCall('indexFaces', params)
    }

    async listFaces(collectionId) {
        var params = {
            CollectionId: collectionId,
            MaxResults: 4096
        }

        return await this.doCall('listFaces', params)
    }


    async searchFacesByFaceId(collectionId, faceId, threshold = 90) {
        var params = {
            CollectionId: collectionId,
            FaceId: faceId,
            FaceMatchThreshold: threshold,
            MaxFaces: 4096
        }

        return await this.doCall('searchFaces', params)
    }

  
    async searchFacesByImage(collectionId, s3Image, threshold = 90) {
        var params = {
            CollectionId: collectionId,
            Image: {
                S3Object: {
                    Bucket: this.bucket,
                    Name: s3Image.Key
                }
            },
            FaceMatchThreshold: threshold,
            MaxFaces: 4096
        }

        return await this.doCall('searchFacesByImage', params)
    }
}
