export default class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = new Array(this.capacity);
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (hashCode * primeNumber + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index] || [];

    for (let entry of bucket) {
      if (entry.key === key) {
        entry.value = value;
        return;
      }
    }

    bucket.push({ key, value });
    this.buckets[index] = bucket;
    this.size++;

    if (this.size / this.capacity > this.loadFactor) {
      this.resize();
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index] || [];

    for (let entry of bucket) {
      if (entry.key === key) {
        return entry.value;
      }
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index] || [];

    for (let entry of bucket) {
      if (entry.key === key) {
        return true;
      }
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket) return false;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.capacity);
    this.size = 0;
  }

  keys() {
    const result = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        for (let entry of bucket) {
          result.push(entry.key);
        }
      }
    }
    return result;
  }

  values() {
    const result = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        for (let entry of bucket) {
          result.push(entry.value);
        }
      }
    }
    return result;
  }

  entries() {
    const result = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        for (let entry of bucket) {
          result.push([entry.key, entry.value]);
        }
      }
    }
    return result;
  }
}
