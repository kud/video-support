module.exports = {

  isHtmlAvailable: function() {
    return !!document.createElement('video').canPlayType
  },

  isH264Available: function() {
    if (!this.isHtmlAvailable()) {
      return false
    }

    var canPlayType = document.createElement("video").canPlayType('video/mp4;codecs="avc1.42E01E, mp4a.40.2"')

    if (canPlayType === "") {
      return false
    }

    return canPlayType
  },

  isHlsAvailable: function() {
    if (!this.isHtmlAvailable()) {
      return false
    }

    var video = document.createElement('video')
    var xMpegUrl = video.canPlayType('application/x-mpegURL')
    var vndMpeg = video.canPlayType('application/vnd.apple.mpegURL');

    return (/probably|maybe/).test(xMpegUrl) ||
      (/probably|maybe/).test(vndMpeg)
  },

  isFlashAvailable: function() {
    var hasFlash = false

    try {
      var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')
      if (fo) {
        hasFlash = true;
      }
    } catch (e) {
      if (navigator.mimeTypes && navigator.mimeTypes['application/x-shockwave-flash'] !== undefined && navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
        hasFlash = true
      }
    }

    return hasFlash
  }

}
