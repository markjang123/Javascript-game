
     export const norm = function norm(vec) {
      return dist([0, 0], vec);
    }
     export const dir = function dir(vec){
      const n = norm(vec);
      return scale(vec, 1 / n);
    }
     export const dist = function dist(pos1, pos2) {
      return Math.sqrt(
        Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
      );
    }
     export const randomVec = function randomVec(length){
      const deg = 2 * Math.PI * Math.random();
      return scale([Math.sin(deg), Math.cos(deg)], length);
    }
     export const scale = function scale(vec, m){
      return [vec[0] * m, vec[1] * m];
    }
    
