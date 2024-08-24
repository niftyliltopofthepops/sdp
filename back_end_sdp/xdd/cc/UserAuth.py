from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from rest_framework import views, permissions, status
from rest_framework.permissions import IsAuthenticated
from cc.serializers import ObtainTokenSerializer
#from wesitex_app.serializers import UserSerializer
from cc.EmailBackEnd import JWTAuthentication
from cc.EmailBackEnd import EmailBackEnd
from cc.models import CustomUser, Scores


User = get_user_model()

class app_auth(views.APIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = ObtainTokenSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        username_or_email = serializer.validated_data.get('email')
        password = serializer.validated_data.get('password')

        user = User.objects.filter(username=username_or_email).first()
        if user is None:
            user = User.objects.filter(email=username_or_email).first()

        if user is None or not user.check_password(password):
            return Response({'message': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

        # Generate the JWT token
        jwt_token = JWTAuthentication.create_jwt(user)


        return Response({'token': jwt_token, 'username':user.username, 'user_type': user.user_type})
    
class register(views.APIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = ObtainTokenSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        username = serializer.validated_data.get('username')
        email = serializer.validated_data.get('email')
        password = serializer.validated_data.get('password')

        user = CustomUser(username=username, email=email, password=password)
        user.save()

        return Response({'message': 'User Saved'}, status=200)



class spcbgnr(views.APIView):

    def post(self, request, *args, **kwargs):
        username = request.query_params.get('username')
        user = CustomUser.objects.get(username=username)

        data = request.data
        qn1 = data.get('qn1')
        qn2 = data.get('qn2')
        qn3 = data.get('qn3')
        qn4 = data.get('qn4')
        qn5 = data.get('qn5')
        game_type = data.get('game_type')
        game_name = data.get('game_name')

        qs1 = 1 if qn1 == "Mars" else 0
        qs2 = 1 if qn2 == "Saturn" else 0
        qs3 = 1 if qn3 == "Ganymede" else 0
        qs4 = 1 if qn4 == "Mercury" else 0
        qs5 = 1 if qn5 == "Venus" else 0

        total_score = qs1 + qs2 + qs3 + qs4 + qs5

        Scores.objects.update_or_create(
            user_id=user,
            game_type=game_type,
            game_name=game_name,
            defaults={
                'q1': qn1,
                'q2': qn2,
                'q3': qn3,
                'q4': qn4,
                'q5': qn5,
                'score': total_score,
            }
        )

        return Response({'message': 'Score Saved'}, status=200)
    
class spcntmdt(views.APIView):

    def post(self, request, *args, **kwargs):
        username = request.query_params.get('username')
        user = CustomUser.objects.get(username=username)

        data = request.data
        qn1 = data.get('qn1')
        qn2 = data.get('qn2')
        qn3 = data.get('qn3')
        game_type = data.get('game_type')
        game_name = data.get('game_name')

        qs1 = 1 if qn1 == "Every 75–76 years" else 0
        qs2 = 1 if qn2 == "0.03" else 0
        qs3 = 1 if qn3 == "Stardust" else 0

        total_score = qs1 + qs2 + qs3 

        Scores.objects.update_or_create(
            user_id=user,
            game_type=game_type,
            game_name=game_name,
            defaults={
                'q1': qn1,
                'q2': qn2,
                'q3': qn3,
                'score': total_score,
            }
        )

        return Response({'message': 'Score Saved'}, status=200)
    
class spcadvanced(views.APIView):

    def post(self, request, *args, **kwargs):
        username = request.query_params.get('username')
        user = CustomUser.objects.get(username=username)

        data = request.data
        qn1 = data.get('qn1')
        qn2 = data.get('qn2')
        game_type = data.get('game_type')
        game_name = data.get('game_name')

        qs1 = 1 if qn1 == "Building blocks of planet formation" else 0
        qs2 = 1 if qn2 == "Trojan asteroids" else 0

        total_score = qs1 + qs2 

        Scores.objects.update_or_create(
            user_id=user,
            game_type=game_type,
            game_name=game_name,
            defaults={
                'q1': qn1,
                'q2': qn2,
                'score': total_score,
            }
        )

        return Response({'message': 'Score Saved'}, status=200)

class quabeginner(views.APIView):

    def post(self, request, *args, **kwargs):
        username = request.query_params.get('username')
        user = CustomUser.objects.get(username=username)

        data = request.data
        qn1 = data.get('qn1')
        qn2 = data.get('qn2')
        qn3 = data.get('qn3')
        game_type = data.get('game_type')
        game_name = data.get('game_name')

        qs1 = 1 if qn1 == "5050" else 0
        qs2 = 1 if qn2 == "6500" else 0
        qs3 = 1 if qn3 == "4100" else 0

        total_score = qs1 + qs2 + qs3

        Scores.objects.update_or_create(
            user_id=user,
            game_type=game_type,
            game_name=game_name,
            defaults={
                'q1': qn1,
                'q2': qn2,
                'q3': qn3,
                'score': total_score,
            }
        )

        return Response({'message': 'Score Saved'}, status=200)
    
class quaintermediate(views.APIView):

    def post(self, request, *args, **kwargs):
        username = request.query_params.get('username')
        user = CustomUser.objects.get(username=username)

        data = request.data
        qn1 = data.get('qn1')
        qn2 = data.get('qn2')
        qn3 = data.get('qn3')
        game_type = data.get('game_type')
        game_name = data.get('game_name')

        qs1 = 1 if qn1 == "Wave Packet" else 0
        qs2 = 1 if qn2 == "Sawtooth" else 0
        qs3 = 1 if qn3 == "Sinusoid" else 0

        total_score = qs1 + qs2 + qs3

        Scores.objects.update_or_create(
            user_id=user,
            game_type=game_type,
            game_name=game_name,
            defaults={
                'q1': qn1,
                'q2': qn2,
                'q3': qn3,
                'score': total_score,
            }
        )

        return Response({'message': 'Score Saved'}, status=200)
    
class quaadvanced(views.APIView):

    def post(self, request, *args, **kwargs):
        username = request.query_params.get('username')
        user = CustomUser.objects.get(username=username)

        data = request.data
        qn1 = data.get('qn1')
        qn2 = data.get('qn2')
        qn3 = data.get('qn3')
        game_type = data.get('game_type')
        game_name = data.get('game_name')

        qs1 = 1 if qn1 == "Constant" else 0
        qs2 = 1 if qn2 == "Double Barrier" else 0
        qs3 = 1 if qn3 == "Step" else 0

        total_score = qs1 + qs2 + qs3

        Scores.objects.update_or_create(
            user_id=user,
            game_type=game_type,
            game_name=game_name,
            defaults={
                'q1': qn1,
                'q2': qn2,
                'q3': qn3,
                'score': total_score,
            }
        )

        return Response({'message': 'Score Saved'}, status=200)

