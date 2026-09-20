(function() {
  var card = document.getElementById('tiltCard');
  var glow = document.getElementById('tiltGlow');
  var bounds = null;
  var maxTilt = 14;

  function onMove(e) {
    if (!bounds) bounds = card.getBoundingClientRect();
    var x = (e.clientX - bounds.left) / bounds.width;
    var y = (e.clientY - bounds.top) / bounds.height;
    var rotY = (x - 0.5) * (maxTilt * 2);
    var rotX = (0.5 - y) * (maxTilt * 2);
    card.style.transform = 'rotateY(' + rotY + 'deg) rotateX(' + rotX + 'deg)';
    glow.style.setProperty('--mx', (x * 100) + '%');
    glow.style.setProperty('--my', (y * 100) + '%');
  }
  function onLeave() {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    bounds = null;
  }
  function onEnter() {
    bounds = card.getBoundingClientRect();
  }

  card.addEventListener('mousemove', onMove);
  card.addEventListener('mouseenter', onEnter);
  card.addEventListener('mouseleave', onLeave);

  // Recompute bounds on resize/scroll since layout can shift
  window.addEventListener('resize', function() { bounds = null; });
})();

(function() {
  var CV_BASE64 = "JVBERi0xLjQKJZOMi54gUmVwb3J0TGFiIEdlbmVyYXRlZCBQREYgZG9jdW1lbnQgKG9wZW5zb3VyY2UpCjEgMCBvYmoKPDwKL0YxIDIgMCBSIC9GMiAzIDAgUiAvRjMgNCAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL0Jhc2VGb250IC9IZWx2ZXRpY2EgL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcgL05hbWUgL0YxIC9TdWJ0eXBlIC9UeXBlMSAvVHlwZSAvRm9udAo+PgplbmRvYmoKMyAwIG9iago8PAovQmFzZUZvbnQgL0hlbHZldGljYS1Cb2xkIC9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIC9OYW1lIC9GMiAvU3VidHlwZSAvVHlwZTEgL1R5cGUgL0ZvbnQKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL0Jhc2VGb250IC9TeW1ib2wgL05hbWUgL0YzIC9TdWJ0eXBlIC9UeXBlMSAvVHlwZSAvRm9udAo+PgplbmRvYmoKNSAwIG9iago8PAovQ29udGVudHMgOSAwIFIgL01lZGlhQm94IFsgMCAwIDU5NS4yNzU2IDg0MS44ODk4IF0gL1BhcmVudCA4IDAgUiAvUmVzb3VyY2VzIDw8Ci9Gb250IDEgMCBSIC9Qcm9jU2V0IFsgL1BERiAvVGV4dCAvSW1hZ2VCIC9JbWFnZUMgL0ltYWdlSSBdCj4+IC9Sb3RhdGUgMCAvVHJhbnMgPDwKCj4+IAogIC9UeXBlIC9QYWdlCj4+CmVuZG9iago2IDAgb2JqCjw8Ci9QYWdlTW9kZSAvVXNlTm9uZSAvUGFnZXMgOCAwIFIgL1R5cGUgL0NhdGFsb2cKPj4KZW5kb2JqCjcgMCBvYmoKPDwKL0F1dGhvciAoS2F0bGVnbyBNYXRsaG9rbykgL0NyZWF0aW9uRGF0ZSAoRDoyMDI2MDkyMDE0Mzk0MiswMCcwMCcpIC9DcmVhdG9yIChcKHVuc3BlY2lmaWVkXCkpIC9LZXl3b3JkcyAoKSAvTW9kRGF0ZSAoRDoyMDI2MDkyMDE0Mzk0MiswMCcwMCcpIC9Qcm9kdWNlciAoUmVwb3J0TGFiIFBERiBMaWJyYXJ5IC0gXChvcGVuc291cmNlXCkpIAogIC9TdWJqZWN0IChcKHVuc3BlY2lmaWVkXCkpIC9UaXRsZSAoS2F0bGVnbyBNYXRsaG9rbyAtIENWKSAvVHJhcHBlZCAvRmFsc2UKPj4KZW5kb2JqCjggMCBvYmoKPDwKL0NvdW50IDEgL0tpZHMgWyA1IDAgUiBdIC9UeXBlIC9QYWdlcwo+PgplbmRvYmoKOSAwIG9iago8PAovRmlsdGVyIFsgL0FTQ0lJODVEZWNvZGUgL0ZsYXRlRGVjb2RlIF0gL0xlbmd0aCAzMjE3Cj4+CnN0cmVhbQpHYXVITj5CZWReKDRPVDVmTT07bj1rTFxQQ3NVUyszR0ZzQEQwJCU/SUhjWm8iZlNbWE5iakwwWFNNQ20tIXEyaS1BSVU/WCEnc0BwOEA6cj9SNihMcGdeO1w7JHVmOSQ/K2QoQCtkNilLQjhPUzlRL205SExeMFA8VCEnOmsvX19jMllfaTVIRVE7ZEYjW3VycjRtRytec0EsWiJTYGpwWERlU1dFSWkxN1hWZFFmNzFoSDE4cWE7TCRwS2R0VGFNQCZuVDJoQHEvN3RjJC5GQXBhYWA2cDUzXytTKjQ9ND03QDplJ0BOZGlvXFFbPiMlJj5sMyslcis6U1NNQWFkZGI+bmZLa2BVXEJKI0pZXFg9XmJEXkVBaHJ0UHVWW2tXQy5rOUlxRSYzM1dBXjMnIms6a1RNIlxqJ0onNz5obE4rWEYjSl9BTDBbTVE5WGA+bUJoKlJAM1pwbzQ4T1ZhIz9ROTBqVllJMGRqb0tYVT10bkg3RzxuXDtiSU9QSmBza3EkXzxwb2QrWT1DT2BeNGFzQzcvIWY5ajU1WEsuanRwXEIoKnFXRy8kcWdlOkglMENaJVU8Mj9rSXIzMlFsVDlNSW9cKCYyYEpQbUBlNEZDREdaRks0P3QwUyQ1UiplcCxaYU1fOUkrSFtoMFczRHNldV1cTyY7XUxaR1lNODdbR29KUjFuRGo+U2pBJmxecipHJEA7aG5IaDpcXDNIQGwhbXUwSGFNXzlCMCk7ZyRVVzw/SydnX1UjPCtuRys7cDhucC1IIS9ZRCcmNyRcOjFgIk1aKldKWmdzNHFIblc1ZDREIkcucDNNRmpOUmAyYUBwKTVPQGtXK1ViKSQyKi9aJGtKQWVeUyFYJ2crWjAhNmVWMlNRL19HJUg/UmYyOmRPPTFsQGN0Smo7S0osNkg0PzYmOSQoR2tvbTFJVy9vLSokbkpqNlckKU5bTE1ZU2cpOVl1LDpvOmVqOyJWJ05yLWtARl1MNmFlNjkoNyxgSSxTKmpdOk1qKUUiXFNQXVVFWm0tSUAsSnQqUSQ/OywsXT5fSWo+UDgmZGJ1ckw5UCFpS0wzVmBKbjY1XW80NFVsUVltcVxCMVw2Z2JNWD0uPm4wLmFYakdwQU1DJFJvK0ZJZ0NQMlxOWVc3Omc8aUptV3U2VEgrJklqVC1SQHI6JnNsa2ZUOnIvIiRDW2hIZ2pfLDI4cyRBbzBEVXBzVVUidG9pVFltYlZEPCM/NGwkQHNrMSMrPUpJIWBOXGMnbVlAWzkmLWJBKTZIUnVzIiMkazF1PWduNGMhczE/LV5vdWFQL0NMUlNRWjtEWjdRMzFWVmNeWSkjS2hJayd0LHEkNF1FYCRPKTcvODtHLlcsSGFLZlo0VFgpYUJwaCpSa2RzQXM1aEtGZkxoa0NsdF0yKVpIOWtRJFFgNjUkZ2NUU0c2bztHKCY2RC1wL2Z0a2soWDY6SCxibFBBW3BrKTBnYCJLQklyI2QpbUIuaUNaXy06L3BQKU9yUFZdPyphUmQpN1VjcGY0cikqUC9xXjQiXVVBKkxERiI9WGRhUWVmPFIoPG5pUjoiYSNtNmk6Oko4Xj51XW9nLl9qSmkhV05DOkdkXUo6UHNWLy5VIWxYXyZYYUNKXGxXaEcvVicxaz9MdC82ZzddUWldMWIhK1tJYnAyOGNKWCZtOGk7ayhWOz1NJSVDKV8iTmhmbEInTUNmXFhYdSVxMDc8RjReYjRqQUQ5MGhkQl1jb104QDxxOTtpMTAoPDtCcjBQKVxlaG9RKSpMbkwsZ1UuYjoiVWAzWVBKSk8pcjhrJ1JHRzApaXBCNzcnYGNnamJWJGFtO1RmaXAuNWkpXmcoalRjdG1PRS8rOD0oMDBNKHE5bz9ZMlhfV0RNVmxGclhiIiw8KmMuUiZbaiVUVSU3OUkkQ2ZmNj4hRmZuNCFKTihhMFs6dW5wMy06Tis9Rl87b3EkOVFvTjYlYVlFdDVhRGpWcCJpSCJIYUZJbikxa0RRWTBwcEo8RTAlNjRRczQjaCFwZiw/PFZbKk0ma2tmPWsxclZNQXQ3YloqME5aXW1ccmtwJmtsSzA3JE5rKWVOJVFqT1dSPE9SLkxdIVhyaD02ZkxPLGVQJiMoWjhuMDFuNiwkWVgsU2Q1LzBeMTxzPi5wWDNlIUN0LWdhL2JYQ0AtUmkqMTU7MStmUE5cLixbUHNndDcwcCohJSMlVCgrSi1EUF85VzsjSlFkTkE6I048SDNUPiwtJy5rcF0qYlMzYFA1aG8tTVc4UiI1J21ZN2hnLWtjbWdxO1Q0SFZmMXMjKlVuV0VMRzghJCJdOXA4ZlAkaElTZyVKZCZkRThbOz8tUmRXbFc/MXU/S3UrbEZkRlAuOFwmI0VFSitSPkQrZVtAXUkjV2hLTFVzSmtgKnBxSzw/XWNnYitoM2FnYCQmTENVQ2ovRldfPzJvZDxNKjViYXFBRltsIThXTUI4K2BnXDk0aWlMPT9dZy5GYz9HamZJNEcyNjdGLGZnUyJKblo+O0c/K3JZUUVrNDVRPURBXTZnNlVUcT5pVjIva3UsIWI4W00oSCNqZllBSVU/XSUlLWVIb0tPKkE4YCdGXDJnL0Beb3VqJENAZW4lZmo9Ukw7Lz4zNGVSJWNlY3BGcCphVS1kXE8pVkAkXyxKQSUuJylGLTwpbEUxMkRKUm0zOy5CUUVnUiQqZ05gLTpeJ2RfPEMpaVxRNis7YWVpQzIqQ0g9PjRPLUglOVBjS0hOZVdKTExoLCUra3IrMU1Ta25WYT5hKDNZU0w8YG42XytTTTtTVnFncyRjMT9mXmJJNE0yUWg6XmJgKUJYLEM/TSlqZmRsI1wjPjhTbWxwQS8yS0g0LHJBRWo4OXRgTWdVREQ3XC1wI04lZyZvVGVsO1E1cVJZMHI0QWQrQig4dV8/a2VHKXBWPmRnVjI7c1FoYUxzLmZQOCsxOUBIR18kSU45VV0xJkUwYElfOlE1NDMyKSxfWz5OKmVrPWBOZUk2YXBmPVFRaE9XK2NMN1BcSF08XVBCWSZbTElWPi04YWxsbGBsKFBxazcmLV1JI11wSDVlRyhpdSFVST0nKUQuZSdvNSZmI1NsVD9JOE9SU0dmYjwuUGhzbmQ9NS9pSDcmOT1udXVnMlgsTidPImkyVC5kdDRlbDEzdTZLMHJnWy9taExabGtwQi42a2YmXlkucj1oXkg3Q2I3bFEvVFBePyJVOTw4PVZQaDkpZUwjXEVWIURJQSVmbV9fdSQ7dCJrVFReITNTU1YnOWVkXlFFaGYrWVtpcWUsXE1HUHFdQj9hMmxtSG9cbjpFOmAwU29QRm09SlRDKS1kNElaLU9oNXMxRyIvIT1QSzZaWVd1WGtacVMoZFBtW2hoWTItbVI7KlEtYF5hKlJJRWgtODMmR0FpKzFvb1coVTxCJy89XT9nbkdELHJqKCYoTi1lWSohYkZCTFA7OlpbSElGY0VMO0pNa2ldaldoMFBdIyMuaGNqMHFDZSkwczkyMTghMUNLWzVSYWxzaCcyUk9zVVcmNFk5LGc4cmBRZDwmTTVJRydmWWlSLiY+IXQnQ1QuQ2JOOz9lbGFcPGFjbyw9LzQzPUQ3X3NibjdAN0g+aFtpZGlVKlpPJURvLnBVOHBTblpfTXE0VDZpQXI8dEI2LV1jXztkJWVLZys3O08tO18xSGNFR2hULD1fVk9ZMmxpR0BVcCkxUjRQUHRLcC9DQDssUzBdYG9JOEJacTo1ODksaDxlc2ZRJFIrWi1USmprSVRJa1EwdTZRTnJZVDs3KjUwMTNOXEsjKGJcWmEsaFJEKGA8JCdkaiM9UmtOZ1tiZCtfRG0xSTRlXiwsZ0gtK2ZPIzhWLEIyYGNRO0hlcmJAX21jLEw3WT4lXFtKQjo3c2Aqc3FodVRtXVhJUEhzOFRfYzZlY1pMMExNZnMpYT5uXDk6aiM7bSFsLXRAVGVgSDIzbDRlSSsuW1JYOFlGLGFccCNZNkwnMkpmYWEhSFg7TFJxb2dMWVZiMHNiUFc0SGpOSUdgaEo9J1tiOztTRHEiXG8lXjg5LTskT0IjKnFcZEFaQUNjdXNXTFc5YFR1ZyY/Vjo+KlpEbiMlKUxaKT9Qa2VQQWBgVTlmJmBJTU1jVmpQPjhpL2tPNyY3PCN0TlMpLy1TLy9sS0FERD4yPCpCZFpMZ1ImIis1V1oya3NyZixKUk0wQkgoK1s5UE8vRC4kVGw1bUhhUXUkIUBtUTYoSjpMRnA+TXBoPi4rISRFQk1yMlNKL21TO3JWNT0xW34+ZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgMTAKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDYxIDAwMDAwIG4gCjAwMDAwMDAxMTIgMDAwMDAgbiAKMDAwMDAwMDIxOSAwMDAwMCBuIAowMDAwMDAwMzMxIDAwMDAwIG4gCjAwMDAwMDA0MDggMDAwMDAgbiAKMDAwMDAwMDYxMSAwMDAwMCBuIAowMDAwMDAwNjc5IDAwMDAwIG4gCjAwMDAwMDA5NzAgMDAwMDAgbiAKMDAwMDAwMTAyOSAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9JRCAKWzw4ZmRkZWYyMmRjYjMyZjc0ZTc3MzkxZTMwODU1NGVkNj48OGZkZGVmMjJkY2IzMmY3NGU3NzM5MWUzMDg1NTRlZDY+XQolIFJlcG9ydExhYiBnZW5lcmF0ZWQgUERGIGRvY3VtZW50IC0tIGRpZ2VzdCAob3BlbnNvdXJjZSkKCi9JbmZvIDcgMCBSCi9Sb290IDYgMCBSCi9TaXplIDEwCj4+CnN0YXJ0eHJlZgo0MzM3CiUlRU9GCg==";

  function base64ToBlob(base64, mime) {
    var byteChars = atob(base64);
    var byteNumbers = new Array(byteChars.length);
    for (var i = 0; i < byteChars.length; i++) {
      byteNumbers[i] = byteChars.charCodeAt(i);
    }
    return new Blob([new Uint8Array(byteNumbers)], { type: mime });
  }

  function fallbackDownload() {
    var link = document.createElement('a');
    link.href = 'data:application/pdf;base64,' + CV_BASE64;
    link.download = 'Katlego_Matlhoko_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  async function downloadCV() {
    try {
      if (window.claude && typeof window.claude.use === 'function') {
        var downloads = await window.claude.use('downloads');
        if (downloads) {
          var blob = base64ToBlob(CV_BASE64, 'application/pdf');
          await downloads.save({ filename: 'Katlego_Matlhoko_CV.pdf', data: blob });
          return;
        }
      }
      fallbackDownload();
    } catch (err) {
      if (err && err.code !== 'declined') {
        fallbackDownload();
      }
    }
  }

  var btn1 = document.getElementById('cvBtnHero');
  var btn2 = document.getElementById('cvBtnContact');
  if (btn1) btn1.addEventListener('click', downloadCV);
  if (btn2) btn2.addEventListener('click', downloadCV);
})();
