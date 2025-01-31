<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <title>Risa Karmida Communications</title>

    {{-- Style --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    {{-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"> --}}
    
    {{-- Logo Title --}}
    <link rel="icon" href="{{ asset('storage/asset/rkc_logo.png') }}" type="image/x-icon">
    @vite(['resources/sass/app.scss', 'resources/js/app.js']) 
    @stack('styles')
    
    @yield('preload')
</head>
<body class="d-flex flex-column h-100" data-spy="scroll" data-target=".navbar" data-offset="50">
    {{-- Preload --}}
    <section class="preloader">
        <div class="preloader-inner">
            <div class="preloader-icon">
                <span></span>
                <span></span>
            </div>
        </div>
    </section>

    {{-- Content --}}
    @yield('content')

    <a href="https://wa.me/628119934474?text=Halo%2C%20saya%20membutuhkan%20informasi%20tentang%20pelatihan%20komunikasi%20di%20RKC%20Trainings." target="_blank">
        <div class="floating" id="floating">
            <img src="{{ asset('storage/asset/whatsapp-logo.png') }}" alt="" class="float-button">
        </div>
    </a>
    {{-- <div class="contact-box">Contact Us</div> --}}

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    @stack('scripts')
</body>
</html>