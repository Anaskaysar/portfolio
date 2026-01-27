from storages.backends.gcloud import GoogleCloudStorage

class MediaStorage(GoogleCloudStorage):
    location = 'media'
    file_overwrite = False
