def SetPartition(arr, k, delta):
    n = len(arr)
    print("k: " + str(k) + " delete: " + str(delta))
    if k == n:
      print("If k == n -> k: " + str(k) + " delta: " + str(delta))
      return abs(delta)
    else:
        print("Before s1 --- k: " + str(k) + " delta: " + str(delta))
        s1 = SetPartition(arr, k+1, delta - arr[k])
        print("Value of s1: " + str(s1))
        print("Before s2 --- k: " + str(k) + " delta: " + str(delta))
        s2 = SetPartition(arr, k+1, delta + arr[k])
        print("Value of s2: " + str(s2))
        if s1 > s2:
            return s2
        else:
            return s1

if __name__ == "__main__":
    print("Result: " + str(SetPartition([5,3,5,4],0,0)))
